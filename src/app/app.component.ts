import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { OneSignal } from '@ionic-native/onesignal/ngx';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'Appoinments',
      url: 'appoinments',
      icon: 'calendar'
    },
    {
      title: 'History',
      url: 'history',
      icon: 'time'
    },
    {
      title: 'Profile',
      url: 'profile',
      icon: 'person'
    },
    {
      title: 'Refer and Share',
      url: 'invite',
      icon: 'gift'
    },
    // {
    //   title: 'Logout',
    //   url: 'home',
    //   icon: 'power'
    // }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private oneSignal: OneSignal,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      setTimeout(async () => {
        await this.oneSignal.startInit(environment.onesignal.appId, environment.onesignal.googleProjectNumber);
        this.oneSignal.getIds().then((data) => {
          localStorage.setItem('onesignal', data.userId);
        });
        await this.oneSignal.endInit();
      }, 1000);
      this.statusBar.backgroundColorByHexString('#3F9185');
      this.splashScreen.hide();
    });
  }

  ngOnInit() {

  }
  logout() {
    console.log('logtout ');
    localStorage.clear();
    this.navCtrl.navigateRoot(['login']);
  }
}

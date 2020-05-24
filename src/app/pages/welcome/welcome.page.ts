import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  showSkip = true;
  slideOpts = {
    zoom: false
  };
  @ViewChild('slides', { static: false }) slides: IonSlides;
  constructor(
    private router: Router,
    private menuController: MenuController
  ) { }

  ngOnInit() {
  }
  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }
  startApp() {
    console.log('logn');
    this.router.navigate(['login']);
  }
  ionViewWillEnter() {
    this.menuController.enable(false);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ActionSheetController, NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import { register } from 'src/app/interfaces/register';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild(IonSlides, { static: false }) slides: IonSlides;
  user: register = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    gender: 'male',
    phone: '',
    address: '',
    avatar: ''
  };
  slideOpts = {
    slidesPerView: 1,
    allowTouchMove: false
  };
  otp: any = '';
  hideResend: boolean;
  constructor(
    private location: Location,
    private util: UtilService,
    private actionSheetController: ActionSheetController,
    private navCtrl: NavController
  ) {
    this.hideResend = false;

  }

  ngOnInit() {
  }
  goNext() {
    this.slides.slideNext(500).then(d => console.log(d));
  }
  emailValidation() {
    console.log('user', this.user)
    const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
    if (this.user.email === '' || !this.user.email) {
      this.util.toast('Please enter email', 'danger', 'bottom');
      return false;
    }
    if (!(emailfilter.test(this.user.email))) {
      this.util.toast('Please enter valid email', 'danger', 'bottom');
      return false;
    }
    setTimeout(() => {
      this.hideResend = true;
    }, 3000);
    this.goNext();
  }
  prev() {
    this.slides.slidePrev(1000).then(d => console.log(d));
  }
  back() {
    this.location.back();
  }
  onOtpChange(event) {
    console.log(event);
    this.otp = event;
  }
  validateOtp() {
    if (this.otp === '') {
      this.util.toast('Please enter otp', 'danger', 'bottom');
      return false;
    }
    this.goNext();
  }
  password() {
    if (this.user.password === '') {
      this.util.toast('Please enter password', 'danger', 'bottom');
      return false;
    }
    this.goNext();
  }

  submit() {
    localStorage.setItem('uid', this.user.email);
    this.navCtrl.navigateRoot(['home']);
  }
  async avatar() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose Avtars',
      mode: 'ios',
      buttons: [{
        text: 'Gallery',
        icon: 'image-outline',
        handler: () => {
          console.log('galley clicked');
        }
      }, {
        text: 'Camera',
        icon: 'camera-outline',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  resend() {
    console.log('resend');
  }
}

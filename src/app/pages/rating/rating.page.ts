import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import swal from 'sweetalert2';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {

  rate = 3;
  constructor(
    private router: Router,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back();
  }

  onRateChange(eve) {
    console.log(eve);
  }
  save() {
    swal.fire({
      title: 'Success',
      text: 'Your Review is saved successfully',
      icon: 'success',
      backdrop: false,
    });
    this.navCtrl.navigateRoot(['home']);
  }
}

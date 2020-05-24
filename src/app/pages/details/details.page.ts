import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  ratting: any;
  feature: any;
  selected: any[] = [];

  services = [
    {
      name: 'Make Up',
      image: 'assets/imgs/makeup.jpg',
      price: '40',
      time: '1.5 hr'
    },
    {
      name: 'Hair Styling',
      image: 'assets/imgs/hair_style.jpg',
      price: '50',
      time: '1 hr'
    },
    {
      name: 'Shampoo',
      image: 'assets/imgs/shampoo.jpg',
      price: '25',
      time: '30 min'
    },
    {
      name: 'Hair Curling',
      image: 'assets/imgs/curling.jpg',
      price: '30',
      time: '45 min'
    },
    {
      name: 'Hair coloring',
      image: 'assets/imgs/hair_color.jpg',
      price: '50',
      time: '1 hr'
    },
    {
      name: 'Face Massage',
      image: 'assets/imgs/face_massage.jpg',
      price: '60',
      time: '2 hr'
    },
    {
      name: 'Hair straitniing',
      image: 'assets/imgs/strait.jpg',
      price: '45',
      time: '50 min'
    },
    {
      name: 'Hair Spray',
      image: 'assets/imgs/spraying.jpg',
      price: '50',
      time: '30 min'
    },
  ];

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private util: UtilService
  ) {
    this.ratting = 4;
    this.feature = 1;
  }
  segmentChanged(event) {
    console.log(event);
  }
  ngOnInit() {
  }
  back() {
    this.navCtrl.back();
  }
  appoiment() {
    if (this.selected.length <= 0) {
      this.util.errorToast('Please select atleast one service');
      return false;
    }
    this.router.navigate(['make-appoinments']);
  }
  add(item) {
    console.log('before add/remove', this.selected);
    if (this.selected.includes(item)) {
      this.selected.filter(x => console.log(x, item));
      this.selected = this.selected.filter(x => x !== item);
    } else {
      this.selected.push(item);
    }
    console.log('selected', this.selected);
  }
}

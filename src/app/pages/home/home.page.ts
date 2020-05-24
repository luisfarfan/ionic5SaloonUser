import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LocationModalPage } from '../location-modal/location-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  address = 'New Home Town,old way';
  salons = [
    {
      image: 'assets/imgs/1.jpg',
      price: '40',
    },
    {
      image: 'assets/imgs/makeup.jpg',
      price: '50',
    },
    {
      image: 'assets/imgs/hair_style.jpg',
      price: '60',
    },
    {
      image: 'assets/imgs/shampoo.jpg',
      price: '35',
    },
    {
      image: 'assets/imgs/curling.jpg',
      price: '32',
    },
    {
      image: 'assets/imgs/hair_color.jpg',
      price: '45',
    },
    {
      image: 'assets/imgs/face_massage.jpg',
      price: '20',
    },
    {
      image: 'assets/imgs/strait.jpg',
      price: '30',
    },
    {
      image: 'assets/imgs/spraying.jpg',
      price: '40',
    },
  ];

  constructor(
    private menuController: MenuController,
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ionViewWillEnter() {
    this.menuController.enable(true);
  }
  ngOnInit() {
  }
  openSalon() {
    this.router.navigate(['details']);
  }
  onSearchChange(event) {

  }
  goToMap() {
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: LocationModalPage
    });

    modal.onDidDismiss().then((data: any) => {
      console.log(data);
      this.address = data.data.addr;
    });
    return await modal.present();
  }

}

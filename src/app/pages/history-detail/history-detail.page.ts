import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.page.html',
  styleUrls: ['./history-detail.page.scss'],
})
export class HistoryDetailPage implements OnInit {

  ratting = 4;

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back();
  }

  goToRating() {
    this.router.navigate(['/rating']);
  }

}

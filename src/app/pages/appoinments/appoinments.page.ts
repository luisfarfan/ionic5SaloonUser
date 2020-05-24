import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.page.html',
  styleUrls: ['./appoinments.page.scss'],
})
export class AppoinmentsPage implements OnInit {

  data = [
    {
      name : 'Salon 1',
      date : '21-Feb-2020',
      status : 'new',
      price : 200,
    },
    {
      name : 'Salon 2',
      date : '21-Feb-2020',
      status : 'accepted',
      price : 300,
    },
    {
      name : 'Salon 3',
      date : '21-Feb-2020',
      status : 'Pending',
      price : 500,
    },
    {
      name : 'Salon 4',
      date : '21-Feb-2020',
      status : 'Canceled',
      price : 300,
    },
    {
      name : 'Salon 5',
      date : '21-Feb-2020',
      status : 'accepted',
      price : 700,
    },
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHistoryDetail(){
    this.router.navigate(['/history-detail'])
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import * as moment from 'moment';
import { IonSlides, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-make-appoinments',
  templateUrl: './make-appoinments.page.html',
  styleUrls: ['./make-appoinments.page.scss'],
})
export class MakeAppoinmentsPage implements OnInit {
  activeNum: any;

  @ViewChild(CalendarComponent, { static: false }) myCal: CalendarComponent;
  @ViewChild('mySlider', { static: false }) slider: IonSlides;

  slideOpts = {
    slidesPerView: 1,
    allowTouchMove: false
  }

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  lbl_visible = false;

  currnetMonth;
  date;
  my_date;
  todayDate;
  id = 1;

  pay_id = 1;

  booked = [
    {
      'time': '10:00 AM',
      'status': '1'
    },
    {
      'time': '11:00 AM',
      'status': '1'
    },
    {
      'time': '12:00 PM',
      'status': '0'
    },
    {
      'time': '02:00 PM',
      'status': '0'
    },
    {
      'time': '03:00 PM',
      'status': '0'
    },
    {
      'time': '05:00 PM',
      'status': '1'
    },
    {
      'time': '08:00 PM',
      'status': '0'
    }
  ];
  template: any;
  constructor(private navCtrl: NavController, private router: Router) {
    this.activeNum = 1;
    this.todayDate = moment();
  }



  ngOnInit() {
    this.currnetMonth = this.getDate(new Date());

    console.log(this.currnetMonth)
  }

  getDate(date) {
    var d = new Date(date);
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
      "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];
    var c = monthNames[d.getMonth()];
    return c;
  }

  onCurrentDateChanged(ents) {
    this.currnetMonth = this.getDate(ents);
    console.log("====", this.currnetMonth);
  }

  back() {
    this.date = this.todayDate.subtract(1, 'days').toDate();
    this.my_date = moment(this.date).format('ddd, Do MMMM')
    var swiper = document.querySelector('.swiper-container')['swiper'];
    var date = moment().add('-1', 'M').toLocaleString();
    this.currnetMonth = this.getDate(date);
    swiper.slidePrev();
  }

  next() {
    this.date = this.todayDate.add(1, 'days').toDate();
    this.my_date = moment(this.date).format('ddd, Do MMMM')
    var swiper = document.querySelector('.swiper-container')['swiper'];

    console.log(swiper)
    swiper.slideNext();
  }

  onClick(val) {
    console.log(val);
    this.id = val;
  }

  onslide2() {
    this.slider.slideNext();
    this.id = this.id + 1
  }

  close() {
    this.navCtrl.back();
  }

  slotBooking(item) {

    this.booked.forEach(element => {
      if (element.status === '2') {
        element.status = '0';
      }
    });
    if (item.status === '1') {
      return false;
    } else {
      console.log(item);
      item.status = '2';
      console.log(this.booked);
    }
  }

  choosePayment(val) {
    this.pay_id = val;
  }

  markDisabled = (date: Date) => {
    const current = new Date();
    return date < current;
  }

  onPay() {
    swal.fire({
      title: 'Success',
      text: 'Your appointment is booked successfully',
      icon: 'success',
      backdrop: false,
    });
    this.router.navigate(['/appoinments']);
  }
}

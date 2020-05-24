import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  is_disabled = true;
  constructor() { }

  ngOnInit() {
  }

  edit(){
    this.is_disabled = !this.is_disabled;
  }

}

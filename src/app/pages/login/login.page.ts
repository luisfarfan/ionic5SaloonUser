import { Component, OnInit } from '@angular/core';
import { login } from 'src/app/interfaces/login';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: login = { email: '', password: '' };
  submitted = false;

  constructor(
    private router: Router,
    private api: ApiService,
    private util: UtilService
  ) { }
  ngOnInit() {
  }

  onLogin(form: NgForm) {
    console.log('form', form);
    this.submitted = true;
    if (form.valid) {
      console.log('login');
      const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
      if (!(emailfilter.test(this.login.email))) {
        this.util.toast('Please enter valid email', 'danger', 'bottom');
        return false;
      }
      // this.api.post('Login', this.login).then(data => {
      //   console.log(data.data);
      // }).catch(error => {
      //   console.log('errir', error);
      // });
      localStorage.setItem('uid', form.control.value.email);
      this.router.navigate(['/home'], { replaceUrl: true });
    }
  }

  resetPass() {
    this.router.navigate(['reset']);
  }
  register() {
    this.router.navigate(['register']);
  }

}

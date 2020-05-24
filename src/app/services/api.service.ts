import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: any;
  constructor(
    private http: HTTP
  ) {
    this.baseUrl = environment.baseUrl;
  }

  public get(url) {
    return this.http.get(this.baseUrl + url, {}, {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
  }

  public extGet(url) {
    return this.http.get(url, {}, {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
  }
  public post(url, body) {
    return this.http.post(this.baseUrl + url, body, {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
  }
  public put(url, body) {
    return this.http.put(this.baseUrl + url, body, {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
  }
  public delte(url) {
    return this.http.delete(this.baseUrl + url, {}, {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
  }
}

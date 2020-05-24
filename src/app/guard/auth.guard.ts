import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const uid = localStorage.getItem('uid');
        console.log('uid', localStorage.getItem('uid'));
        if (uid && uid !== null && uid !== 'null') {
            return true;
        }
        this.router.navigate(['/welcome'], { replaceUrl: true });
        return false;
    }
}

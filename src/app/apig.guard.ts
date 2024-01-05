import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ApigGuard implements CanActivate {
  constructor(private _ApiService:ApiService ,private _Router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
      if(this._ApiService.currentUser.getValue()!=null){
        return true;
      }
      else
      {
        // this._Router.navigate(['/login']);
        return true;
      }
  }
  
}

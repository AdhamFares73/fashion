import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable ,BehaviorSubject} from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _HttpClient:HttpClient ,private _Router:Router) {
    if(localStorage.getItem('userToken')!=null){
      this.savaCurrentUser();
    }
   }

  currentUser = new BehaviorSubject(null);

  savaCurrentUser(){
    let token :any = localStorage.getItem('userToken')
    this.currentUser.next(jwtDecode(token))
    console.log(this.currentUser)

  }
  register(formData:any):Observable<any>
  {
   return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',formData)
  }
  login(formData:any):Observable<any>{
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',formData)
  }

  logout(){
    this.currentUser.next(null);
    localStorage.removeItem('userToken')
    this._Router.navigate(['/login'])
  }
  
  getCategories(formData:any):Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/products/category/${formData}`)
  }
  getMenClothes():Observable<any>{
    return this._HttpClient.get("https://fakestoreapi.com/products?limit=4");
  }
  getWomenClothes():Observable<any>{
    return this._HttpClient.get("https://fakestoreapi.com/products?sort=desc");
  }
}

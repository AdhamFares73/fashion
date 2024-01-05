import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _ApiService:ApiService) {
    _ApiService.currentUser.subscribe(()=>{
      if (_ApiService.currentUser.getValue() != null) {
        this.isLogin = true;
      }
      else
      {
        this.isLogin =false;
      }
    })
   }
isLogin :boolean = false
  ngOnInit(): void {
  }
isLogOut(){
  this._ApiService.logout();
}
}

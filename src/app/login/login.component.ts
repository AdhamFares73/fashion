import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _ApiService:ApiService ,private _Router:Router) { }

  ngOnInit(): void {
  }
error :string ="";

  loginForm = new FormGroup({
    email : new FormControl(null,
      [Validators.email , Validators.required]),
    password :new FormControl(null,
      [Validators.required])
  })
submitloginForm(loginform :FormGroup){
  if(loginform.value.email == "admin@admin.com" && loginform.value.password == "12345678"){
    localStorage.setItem("userToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkaGFtIEhhc3NhbiIsImlhdCI6MTUxNjIzOTAyMn0.kLXt9XhWDJiCIUOV_gKAm2LaCabmyeJ59GEprTYSYNA");
    this._Router.navigate(['/home'])
  }else{
    this.error = "Email Or password is invalid";
  }

  // this._ApiService.login(loginform.value).subscribe((response)=>{
  //   if(response.message == ('success')){
  //     localStorage.setItem('userToken',response.token);
  //     this._ApiService.savaCurrentUser();
  //     this._Router.navigate(['/home'])
  //   }
  //   else 
  //   {
  //     this.error = response.message;
    // }
  // })
  }
}

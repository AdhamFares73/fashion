import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators, EmailValidator} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _ApiService:ApiService , private _Router:Router) { }
  error:string ='';
  
  registerForm = new FormGroup({
    first_name : new FormControl(null,[Validators.maxLength(10),Validators.minLength(3),Validators.required]),
    last_name : new FormControl(null,[Validators.maxLength(10) , Validators.minLength(3) , Validators.required ]),
    email : new FormControl(null,[Validators.email , Validators.required]),
    age :new FormControl(null,[Validators.min(18), Validators.max(50),Validators.required,Validators.pattern("^[1-5][0-9]$")]),
    password : new FormControl(null,[Validators.required])
  })

  submitRegister(registerForm:FormGroup){
    this._ApiService.register(registerForm.value).subscribe((response)=>{
      if(response.message=='success'){
        this._Router.navigate(["/login"])
      }
      else
      {
        this.error = response.errors.email.message;
        
      }
    })
  }

  ngOnInit(): void {
  }

}

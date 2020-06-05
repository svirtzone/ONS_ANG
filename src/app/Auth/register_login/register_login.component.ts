import { Component, OnInit } from '@angular/core';
import { RegisterLoginService } from '../../service/register_login/Register-Login.httpservice'; 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import * as $ from 'jquery';
@Component({
  selector: 'app-ons',
  templateUrl: './register_login.component.html',
  styleUrls: ['./register_login.component.css']
})
export class RegisterLoginComponent implements OnInit {

  Featured:any;
  RegisterForm: FormGroup;
  LoginForm: FormGroup;

  constructor(fb: FormBuilder,private reg_loginservice: RegisterLoginService) {
    
    this.RegisterForm = fb.group({
            'name': [null, Validators.required],
            'email': [null, Validators.required],
            'password': [null, Validators.required],
            're-password': [null, Validators.required],
        });
    this.LoginForm = fb.group({
            
            'email': [null, Validators.required],
            'password': [null, Validators.required]
        });

  }

  ngOnInit() {
    
  }

  Register(value: any){

    let form = value;
    
    this.reg_loginservice.RegisterRequest(form).subscribe((data: any[])=>{
          // this.HomeList = data;
    });

  }


  Login(value: any){

    let form = value;

    this.reg_loginservice.LoginRequest(form).subscribe((data: any[])=>{
          // this.HomeList = data;
    });

  }
  
  
}

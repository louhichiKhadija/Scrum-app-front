import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  msg: String;
  isLoginFailed = false;

  hide:boolean;


  constructor(private authService: AuthService, 
              private router: Router) { 
  
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', Validators.required),
    });

    this.hide=true
  }

  login(){
    this.authService.login(this.loginForm.value).subscribe(
      data =>{
        this.authService.saveToken(data['token'])
        this.isLoginFailed = false;},
      err => {
        if(err.error['message']=='Unauthorized') this.msg="Please check your informations !!"
        this.isLoginFailed=true;
      })
      

  

    

  }}



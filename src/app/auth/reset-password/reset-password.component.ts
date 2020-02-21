import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Validator, ValidationErrors,NG_VALIDATORS } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  message: String;
  message_error: String;
  restPasswordForm: FormGroup;
  id: any;
  user: any;
  token: String;
  hide_password: boolean;
  hide_confirmation: boolean;

  constructor(private authService: AuthService,private route: ActivatedRoute, private router: Router) {
    this.restPasswordForm = new FormGroup({
      password: new FormControl('', Validators.required),
      confirmation: new FormControl('', Validators.required),

    });
    this.token=this.route.snapshot.queryParams['token'];
    this.authService.validRestToken(this.token)
    if(!this.authService.validRestToken(this.token))  this.router.navigateByUrl("/auth/login")
   }

  ngOnInit() {
    this.hide_password=true;
    this.hide_confirmation=true;
  }

  onSubmit(){
    if(this.token !=null && this.restPasswordForm.status=='VALID')
      this.authService.resetPassword(this.token, this.restPasswordForm.value.password).subscribe(
        data => {
          console.log(data)
          this.message="Password is reset ! You can now login to your account"},
        err =>{
          console.log(err)
          this.message_error=err.error.message;
        })
    else this.message_error="Error has been accurent while sending your request ! \n Please check the link and try again"
    
  }
      

}

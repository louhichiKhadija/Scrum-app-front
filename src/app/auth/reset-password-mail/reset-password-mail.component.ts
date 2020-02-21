import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password-mail',
  templateUrl: './reset-password-mail.component.html',
  styleUrls: ['./reset-password-mail.component.css']
})
export class ResetPasswordMailComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  message: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(){
    this.authService.forgotPassword(this.email.value).subscribe((res: any) => {
      this.message= res;
    })
  }

}

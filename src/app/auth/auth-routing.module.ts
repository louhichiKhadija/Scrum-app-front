import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordMailComponent } from './reset-password-mail/reset-password-mail.component';




const routes: Routes = [
  { path: '', component:AuthComponent , children:[
    { path: 'login', component: LoginComponent },
    { path: 'register', component:RegisterComponent},
    { path: 'reset-password', component:ResetPasswordComponent},
    { path: 'forgot-password', component:ResetPasswordMailComponent}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

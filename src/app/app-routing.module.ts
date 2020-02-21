import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: '', component:WelcomeComponent},
  { path: 'auth', loadChildren:'./auth/auth.module#AuthModule'},
  //{ path: 'scrum', loadChildren:'./scrum/scrum.module#ScrumModule', canActivate: [AuthGuard]}
  {path: 'scrum', loadChildren:'./scrum/scrum.module#ScrumModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './scrum/home/home.component';


const routes: Routes = [
  { path: 'auth', loadChildren:'./auth/auth.module#AuthModule'},
  { path: '', loadChildren:'./scrum/scrum.module#ScrumModule'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

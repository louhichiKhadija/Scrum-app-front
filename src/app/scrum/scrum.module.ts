import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { HomeComponent } from './home/home.component';
import { ScrumComponent } from './scrum.component';
import { ScrumRoutingModule } from './scrum-routing.module';



@NgModule({
  declarations: [
    ScrumComponent,
    UpdateProfileComponent, 
    HomeComponent],
  imports: [
    ScrumRoutingModule,
    CommonModule
  ]
})
export class ScrumModule { }

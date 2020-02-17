import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { HomeComponent } from './home/home.component';
import { ScrumComponent } from './scrum.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ScrumRoutingModule } from './scrum-routing.module';



@NgModule({
  declarations: [
    ScrumComponent,
    UpdateProfileComponent, 
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    ScrumRoutingModule,
    CommonModule
  ]
})
export class ScrumModule { }

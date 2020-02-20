import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';

import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { HomeComponent } from './home/home.component';
import { ScrumComponent } from './scrum.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ScrumRoutingModule } from './scrum-routing.module';
import { ProjectComponent } from './project/project.component';



@NgModule({
  declarations: [
    ScrumComponent,
    UpdateProfileComponent, 
    HomeComponent,
    SidebarComponent,
    ProjectComponent
  ],
  imports: [
    ScrumRoutingModule,
    CommonModule,
    MatSidenavModule
  ]
})
export class ScrumModule { }

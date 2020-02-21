import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule} from '@angular/material/sidenav';

import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { HomeComponent } from './home/home.component';
import { ScrumComponent } from './scrum.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ScrumRoutingModule } from './scrum-routing.module';
import { MatCardModule, MatIconModule} from '@angular/material';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { ProjectComponent } from './project/project.component';


import { MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule} from '@angular/material/select';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ReactiveFormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HomeProjectComponent } from './home-project/home-project.component';
import { CreateSprintComponent } from './create-sprint/create-sprint.component';
import { AddTaskComponent } from './add-task/add-task.component'

@NgModule({
  declarations: [
    ScrumComponent,
    UpdateProfileComponent,
    UserDetailsComponent, 
    HomeComponent,
    HomeProjectComponent, 
    SidebarComponent,
    CreateSprintComponent,
    ProjectComponent,
    AddTaskComponent

    
  ],
  imports: [
    ScrumRoutingModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatPasswordStrengthModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    DragDropModule, 
    ScrumRoutingModule,
    CommonModule,
    MatSidenavModule,
    MatIconModule
    
  ]
})
export class ScrumModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrumComponent } from './scrum.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeProjectComponent } from './home-project/home-project.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { CreateSprintComponent } from './create-sprint/create-sprint.component';
import { AddTaskComponent } from './add-task/add-task.component';



const routes: Routes = [
  { path:'', component:ScrumComponent, children:[
      {path:'home', component:HomeComponent},
      {path:'update-profile', component:UpdateProfileComponent},
      {path:'user-details', component:UserDetailsComponent},
      {path:'home-project', component:HomeProjectComponent},
      { path: 'projects', component: ProjectComponent },
      {path: 'new-sprint', component: CreateSprintComponent},
      {path: 'add-task', component:AddTaskComponent}
     
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrumRoutingModule { }

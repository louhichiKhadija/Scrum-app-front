import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScrumComponent } from './scrum.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';



const routes: Routes = [
  { path:'', component:ScrumComponent, children:[
      {path:'', component:HomeComponent},
      {path:'update-profile', component:UpdateProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class ScrumRoutingModule { }

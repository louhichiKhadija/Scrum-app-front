import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScrumComponent } from './scrum.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { FormsModule} from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeProjectComponent } from './home-project/home-project.component';


const routes: Routes = [
  { path:'', component:ScrumComponent, children:[
      {path:'', component:HomeComponent},
      {path:'update-profile', component:UpdateProfileComponent},
      {path:'user-details', component:UserDetailsComponent},
      {path:'home-project', component:HomeProjectComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule ],
  exports: [RouterModule]
})
export class ScrumRoutingModule { }

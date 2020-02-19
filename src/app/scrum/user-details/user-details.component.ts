import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/user';
import { UserUpdateService } from 'src/app/services/user-update.service';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';



@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users:User;
  id:number=1;
  data:any

  img = {
    src: 'http://localhost:9000/user/photo/'+this.id
}
  constructor(private userService : UserUpdateService) {



   }

  ngOnInit() {
    this.id=1;
this.userService.getUser(this.id)
.subscribe(data =>{
  console.log(data)
  this.users=data;
}),error=>console.log("saber");
    
  }


}




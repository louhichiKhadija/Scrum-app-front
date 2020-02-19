import {Title} from '@angular/platform-browser';
import {MatSlideToggleChange} from '@angular/material';
import {MatPasswordStrengthComponent} from '@angular-material-extensions/password-strength';
 
import { FormsModule, FormControl } from '@angular/forms';
import { ChangeDetectionStrategy,Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


import { User } from 'src/app/services/user';
import { UserUpdateService } from 'src/app/services/user-update.service';
                                                   
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateProfileComponent implements OnInit {
users:User;
id:number=1;
message:any;
photo: any = File;
addUserForm: FormGroup;
img = {
  src: 'http://localhost:9000/user/photo/'+this.id
}
  constructor(private routr:ActivatedRoute,private router:Router,
    private userService : UserUpdateService) { }

  ngOnInit() {

//this.id;

this.userService.getUser(this.id)
.subscribe(data =>{
  console.log(data)
  this.users=data;
}),error=>console.log("saber");
    
this.addUserForm=new FormGroup({
  firstName:new FormControl('',[Validators.required]),
  lastName:new FormControl('',[Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  photo: new FormControl('')
});


  }
  updateUser(){
//this.userService.updateUser(this.id,this.users)
//.subscribe(data => console.log(data), error => console.log(error));


let resp=this.userService.doRegistration(this.addUserForm.value);
resp.subscribe((data)=>this.message=data);
console.log("good")
location.reload();
  }





  handleImage(event) {
    this.photo = event.target.files[0];
    let formData = new FormData();
    formData.append("file", this.addUserForm['controls'].photo.value);
    formData.append("file", this.photo);
    this.addUserForm['controls'].photo.setValue(this.photo.name);
   //this.registerForm.get('photo').setValue(this.photo);

  
    this.userService.uploadImage(formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}

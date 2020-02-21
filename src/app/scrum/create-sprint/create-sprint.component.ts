import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-sprint',
  templateUrl: './create-sprint.component.html',
  styleUrls: ['./create-sprint.component.css']
})
export class CreateSprintComponent implements OnInit {

  sprintForm: FormGroup

  constructor(private projectService: ProjectService, private router: Router) { 
    this.sprintForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('')
    })
  }

  ngOnInit() {
  }

  save(){
    this.projectService.createSprint(this.sprintForm.value)
    this.router.navigateByUrl('/scrum/add-task')

  }
}

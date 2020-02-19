import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home-project',
  templateUrl: './home-project.component.html',
  styleUrls: ['./home-project.component.css']
})
export class HomeProjectComponent implements OnInit {
  title = 'DragDropApp3';
  constructor() { }

  ngOnInit() {
  }

  todos = [
   
    {
      name: 'MongoDB',
      category: 'Databases'
    },
    {
      name: 'nodeJS',
      category: 'web Development'
    },
    {
      name: 'React',
      category: 'Web Development'
    },
  ];

  completed = [
    {
      name: 'Angular',
      category: 'Web Development'
    },
  
    {
      name: 'Java',
      category: 'Software development'
    },
    {
      name: 'SpringBoot',
      category: 'Web Development'
    }
  ];


  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }


}





import { Component, OnInit } from '@angular/core';
import {TasksService} from '../../services/tasks.service';
import { Tasks } from "../../models/tasks";

@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent implements OnInit {

  tasks: Tasks[]=[];

  constructor(private tasksServices: TasksService) { }

  ngOnInit(): void {
    this.tasksServices.getPrivateTasks()
    .subscribe(
    res => {
      console.log(res);
      this.tasks = res;
    })
  }

}

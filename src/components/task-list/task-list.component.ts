import { Component } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskService } from '../../providers/task.service';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'task-list',
  templateUrl: 'task-list.html'
})
export class TaskListComponent {
  tasks: Task[] = [];
  selectedTask: Task;

  constructor(private taskService: TaskService) {
    this.initList();
  }

  private initList() {
    // this.tasks = JSON.parse(localStorage.getItem("tasks"));
    // if (!this.tasks) {
    //   this.tasks = [];
    // }
    // this.selectedTask = new ITask();
    this.taskService.getTasks()
      .then(response => {
        this.tasks = response;
      });
  }
}
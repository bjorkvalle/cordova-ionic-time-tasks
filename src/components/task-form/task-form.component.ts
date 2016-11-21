import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { TaskService } from '../../providers/task.service';

@Component({
  selector: 'task-form',
  templateUrl: 'task-form.html',
})
export class TaskFormComponent {
  public taskForm: any;

  constructor(public formBuilder: FormBuilder, private taskSvc: TaskService) {
    this.taskForm = this.formBuilder.group({
      description: ['', Validators.required]
    });

  }

  // public postTaskForm() {
  //   console.log(this.taskForm.value);
  //   this.taskSvc.addTask();
  // }
}

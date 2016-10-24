import { Component } from '@angular/core';
import { Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'task-form',
  templateUrl: 'task-form.html',
})
export class TaskFormComponent {
  public taskForm: any;

  constructor(public formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      description: ['', Validators.required]
    });

  }

  postTaskForm() {
    console.log(this.taskForm.value);
  }
}

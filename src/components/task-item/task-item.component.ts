import { Component, Input } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'task-item',
  templateUrl: 'task-item.html'
})
export class TaskItemComponent {
  // To define an input for a component, we use the @Input decorator.
  @Input() task: Task;

  constructor() { }

  public mode() {
    console.log(this.task);
  }
}

import { Component, Input } from "@angular/core";
import { ITask } from "../../models/itask";

@Component({
  selector: "task-item",
  templateUrl: "task-item.html",
})
export class TaskItemComponent {
  // To define an input for a component, we use the @Input decorator.
  @Input() task: ITask;

  constructor() {
    console.log("Created Task Item Component");
  }

  public mode() {
    console.log(this.task);
  }
}

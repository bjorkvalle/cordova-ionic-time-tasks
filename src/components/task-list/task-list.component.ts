import { Component, Input } from "@angular/core";
import { ITask } from "../../models/itask";
// import { TaskService } from "../../providers/task.service";

@Component({
  selector: "task-list",
  templateUrl: "task-list.html",
})
export class TaskListComponent {
  @Input() tasks: ITask[];

  constructor() {
    console.log("Created Task List Component");
  }

  public mode(task: ITask) {

  }

  // this.initList();
  // this.fetchTest();
  // this.postTest();
}

  // private initList() {
  // this.tasks = JSON.parse(localStorage.getItem("tasks"));
  // if (!this.tasks) {
  //   this.tasks = [];
  // }
  // this.selectedTask = new ITask();
  // this.taskService.getTasks()
  //   .then(response => {
  //     this.tasks = response;
  //   });

  // private fetchTest() {
  //   this.taskService.fetchTasks();
  // }

  // private postTest() {
  //   this.taskService.addTask();
  // }

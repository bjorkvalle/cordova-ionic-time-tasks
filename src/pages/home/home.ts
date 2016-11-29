import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TaskService } from '../../providers/task.service';
import { ITask } from '../../models/itask';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public tasks: ITask[];

  private testObj: any;

  constructor(public navCtrl: NavController, private taskSvc: TaskService) { }

  public ionViewDidLoad() {
  }

  private get() {
    this.taskSvc.getAll()
      .subscribe(
      res => {
        this.tasks = res;

        if (this.tasks.length > 0) {
          this.taskSvc.updateTask(this.tasks[0])
            .subscribe(
            resp => console.log(resp),
            err => console.error(err));
        }

        // this.taskSvc.removeTask(this.tasks[this.tasks.length - 1])
        //   .subscribe(
        //   resp => console.log(resp),
        //   err => console.error(err));
        // }
      },
      err => console.error('fail get', err)
      );

    setInterval(() => {
      if (this.tasks !== undefined && this.tasks.length > 0) {
        for (let t of this.tasks) {
          if (t.active) {
            t.milliseconds = t.milliseconds + (new Date().getTime() - t.startMs);
          } else {
            t.startMs = new Date().getTime();
          }
        }
      }
    }, 1);

    // setTimeout(() => {
    //   this.taskSvc.addTask('Trying to add a new task', new Date(), 1)
    //     .subscribe(
    //     res => console.log('add', res),
    //     err => console.error('add fail', err)
    //     );
    // }, 2000);
  }

  public mode(task: ITask) {
    task.active = !task.active;

    task.startMs = new Date().getTime();
  }

}

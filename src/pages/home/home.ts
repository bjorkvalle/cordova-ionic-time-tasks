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

  constructor(public navCtrl: NavController, private taskSvc: TaskService) { }

  public ionViewDidLoad() {
    console.log('Loaded Home Page');

    this.taskSvc.getAll()
      .subscribe(
      res => {
        console.log('get', res);
        this.tasks = res;

        if (this.tasks.length > 0) {
          this.taskSvc.updateTask(this.tasks[0])
            .subscribe(
            resp => console.log(resp),
            err => console.error(err));

          // this.taskSvc.removeTask(this.tasks[this.tasks.length - 1])
          //   .subscribe(
          //   resp => console.log(resp),
          //   err => console.error(err));
        }
      },
      err => console.error('fail get', err)
      );


    setTimeout(() => {
      this.taskSvc.addTask('Trying to add a new task', new Date(), 1)
        .subscribe(
        res => console.log('add', res),
        err => console.error('add fail', err)
        );
    }, 2000);
  }


}

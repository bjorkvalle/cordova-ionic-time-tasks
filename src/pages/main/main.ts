import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TaskData } from '../../providers/task-data';
import { ITask } from '../../models/itask';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class Main {
  public tasks: ITask[] = [];

  private _timer: any;
  private _autosave: any;

  constructor(public navCtrl: NavController, private taskData: TaskData, private alertCtrl: AlertController) { }

  ionViewDidLoad() {
    this.taskData.getTasks().subscribe(
      res => {
        this.tasks = <ITask[]>res;

        for (let t of this.tasks) {
          if (t && t.active) {
            t.active = false;
            this.taskData.updateTask(t).subscribe(res => console.info(res));
          }
        }
      },
      err => console.error(err)
    );
  }

  public mode(task: ITask) {
    this.initTimer();
    task.active = !task.active;

    if (task.active) {
      task.start = new Date();
    }
    else {
      task.oldTime = task.newTime;
      this.taskData.updateTask(task).subscribe(res => console.info(res));
    }
  }

  public remove(task) {
    this.taskData.removeTask(task).subscribe(res => console.info(res));

    let index = this.tasks.indexOf(task, 0);
    if (index > -1)
      this.tasks.splice(index, 1);
  }

  public confirmDelete() {
    let confirm = this.alertCtrl.create({
      title: 'Delete tasks?',
      message: 'Are you sure about this, mate?',
      buttons: [
        {
          text: 'Nah',
          handler: () => console.log('Cancel clicked')
        },
        {
          text: 'Aye',
          handler: () => this.reset()
        }
      ]
    });
    confirm.present();
  }

  private reset() {
    for (let t of this.tasks) {
      this.taskData.removeTask(t).subscribe(res => console.info(res));
    }
    this.tasks = [];
  }

  private initTimer() {
    if (!this._timer) {
      this._timer = setInterval(() => {
        for (let t of this.tasks) {
          if (t && t.active) {
            t.newTime = (new Date().getTime() - t.start.getTime()) + t.oldTime;
            let date = new Date(t.newTime);
            t.utcTime = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
          }
        }
      }, 1);

      this._autosave = setInterval(() => {
        for (let t of this.tasks) {
          if (t && t.active) {
            t.oldTime = t.newTime;
            t.start = new Date();
            this.taskData.updateTask(t).subscribe(res => console.info('autosave', res));
          }
        }
      }, 5000);
    }
  }

}

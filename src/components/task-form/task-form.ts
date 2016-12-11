import { Component, Input } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { TaskData } from '../../providers/task-data';
import { ITask } from '../../models/itask';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'task-form',
  templateUrl: 'task-form.html'
})
export class TaskForm {

  @Input()
  public tasks: ITask[];

  public taskForm: FormGroup;
  public error: string;

  private _loader: any;

  constructor(private taskData: TaskData, private formBuilder: FormBuilder, private loadCtrl: LoadingController) {
    this.taskForm = this.formBuilder.group({
      description: ['', Validators.required]
    });
  }

  public populate(formData) {
    let date = new Date(0);

    let task: ITask = {
      id: 0, // will be properly set by the rest api
      description: formData.description,
      start: new Date(),
      oldTime: 0,
      newTime: 0,
      active: false,
      utcTime: new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()),
    };

    this.loading('Saving new task');

    this.taskData.addTask(task).subscribe(
      res => {
        this.tasks.push(res);
        this.taskForm.reset();
        this.error = null;
        this.cancelLoading();
      },
      err => {
        this.error = this.errMessage(err);
        this.cancelLoading();
      });
  }

  private loading(msg: string) {
    this._loader = this.loadCtrl.create({
      content: msg,
    });
    this._loader.present();
  }

  private cancelLoading() {
    if (this._loader !== null) {
      this._loader.dismiss();
    }
  }

  private errMessage(err): string {
    switch (err) {
      case (404): {
        return 'Could not find server location';
      }
      default: {
        return 'Something unexpected happened';
      }
    }
  }
}

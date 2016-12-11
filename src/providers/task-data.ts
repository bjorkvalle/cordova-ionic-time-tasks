import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { ITask } from '../models/itask';
import { DataFactory } from './data-factory';

@Injectable()
export class TaskData extends DataFactory {

  private _data: any;
  private _urlEnding: string;

  constructor(public http: Http) {
    super(http);
    this._urlEnding = 'bjorkvalle/tasks';
  }

  public getTasks() {
    return this.load().map(res => { return res; });
  }

  public addTask(data: any) {
    return this.post('bjorkvalle/tasks', data);
  }

  public updateTask(task: ITask): Observable<any> {
    return this.update('bjorkvalle/tasks', task, task.id);
  }

  public removeTask(task: ITask) {
    return this.delete('bjorkvalle/tasks', task.id);
  }

  private load(): Observable<any> {
    if (this._data) {
      return Observable.of(this._data);
    }
    else {
      return this.refreshData();
    }
  }

  private refreshData(): Observable<any> {
    return this.getAll(this._urlEnding)
      .map(tasks => {
        this._data = tasks;
        return this._data;
      });
  }

  private clearSession() {
    console.log('Clearing tasks');
    this._data = null;
  }
}

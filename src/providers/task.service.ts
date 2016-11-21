import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import { ITask } from '../models/itask';

@Injectable()
export class TaskService {

  private tasksUrl = 'http://rest.learncode.academy/api/bjorkvalle/test';
  private tasks: ITask[];
  // private tasks: any[];

  constructor(private http: Http) {
    console.log('Created Task Service');
  }

  public getAll(): Observable<any> {
    return this.http.get(this.tasksUrl, this.auth())
      .map(res => {
        return <ITask[]>res.json();
      })
      .catch(err => { return Observable.throw(err); });
  }

  public addTask(descr, startTime, timePassed): Observable<ITask> {
    let task = {
      description: descr,
      startTime: startTime,
      progressedTime: timePassed
    };

    return this.http.post(this.tasksUrl, JSON.stringify(task), this.auth())
      .map(data => <ITask>data.json())
      .catch(err => {
        return Observable.throw('Cannot fetch data');
      });
  }

  public updateTask(task: ITask): Observable<ITask> {
    if (task === null || task === undefined)
      return Observable.throw('Nothing to update');

    task.description = 'funka, please!';

    return this.http.put(`${this.tasksUrl}/${task.id}`, JSON.stringify(task), this.auth())
      .map(resp => resp)
      .catch(err => {
        return Observable.throw(`Cannot update data: ${err}`);
      });
  }

  public removeTask(task: ITask): Observable<ITask> {
    if (task === null || task === undefined)
      return Observable.throw('Nothing to delete');

    /*
    Why no need to parse the return (same with put):
    http://stackoverflow.com/questions/8081701/i-keep-getting-uncaught-syntaxerror-unexpected-token-o
    */

    return this.http.delete(`${this.tasksUrl}/${task.id}`, this.auth())
      .map(resp => resp)
      .catch(err => Observable.throw(`Cannot delete data: ${err}`));
  }

  private auth(): RequestOptions {
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }
}

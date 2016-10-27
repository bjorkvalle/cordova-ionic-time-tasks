import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { TASKS } from '../mock-data/mock-tasks';
import { Task } from '../models/Task';

@Injectable()
export class TaskService {
  private tasksUrl = 'assets/data/tasks.data.json'; // URL to JSON file

  constructor(private http: Http) { }

  public getTasks() {
    return Promise.resolve(TASKS);
  }

  public fetchTasks(): Promise<Task[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.tasksUrl)
        .toPromise()
        .then(response => {
          console.log(response.json() as Task[]);
          resolve(response);
        })
        .catch(err => {
          console.error("NOPE", err);
        })
    })
  }

  public addTask() {
    let task = {
      "id": 3,
      "description": "Learn angular 55",
      "startTime": null,
      "progressedTime": 60
    };
    //var response = this.http.post(this.tasksUrl, task).map(res => res.json());
    return new Promise((resolve, reject) => {
      this.http.post(this.tasksUrl, task)
        .toPromise()
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.error("No postie", err);
        });
    })
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { TASKS } from '../mock-data/mock-tasks';
import { Task } from '../models/task';

@Injectable()
export class TaskService {

  public getTasks() {
    return Promise.resolve(TASKS);
  }
}

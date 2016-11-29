import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TaskFormComponent } from '../components/task-form/task-form.component';
import { TaskListComponent } from '../components/task-list/task-list.component';
// import { TaskItemComponent } from "../components/task-item/task-item.component";
import { TaskService } from '../providers/task.service';
import { TestObservables } from '../providers/test-observables';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TaskFormComponent,
    TaskListComponent,
    // TaskItemComponent,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    TaskService,
    TestObservables,
  ]
})
export class AppModule { }

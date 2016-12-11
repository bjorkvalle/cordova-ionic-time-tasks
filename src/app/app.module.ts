import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Main } from '../pages/main/main';
import { TaskForm } from '../components/task-form/task-form';
import { TaskData } from '../providers/task-data';

@NgModule({
  declarations: [
    MyApp,
    Main,
    TaskForm,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Main,
    TaskForm,
  ],
  providers: [
    TaskData,
  ]
})
export class AppModule { }

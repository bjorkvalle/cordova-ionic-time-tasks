import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  // public tasks: any[];
  // public taskItem: string;
  // public startTime = new Date();
  // public stopwatch;
  // public time;
  constructor(public navCtrl: NavController) {
    //this.initList();

    //this.pause();
  }
  ionViewDidLoad() {
  }

  // private initList() {
  //   this.tasks = JSON.parse(localStorage.getItem("tasks"));
  //   console.log(this.tasks.length);
  //   if (!this.tasks) {
  //     this.tasks = [];
  //   }
  //   this.taskItem = "";

  //   // this.tasks = [
  //   //   "Angular 2",
  //   //   "Ionic 2",
  //   //   "React"
  //   // ]
  // }

  // private pad(time: number, padding: number) {
  //   return time.toString().length < padding ? "0" + time : time;
  // }

  // public mode() {
  //   if (!this.stopwatch) {
  //     console.log("run");
  //     this.play();
  //   }
  //   else {
  //     console.log("pause");
  //     this.pause();
  //   }
  // }

  // public pause() {
  //   clearInterval(this.stopwatch);
  //   this.stopwatch = null;
  // }

  // public play() {
  //   this.stopwatch = setInterval(() => {
  //     let clock = new Date().getTime() - this.startTime.getTime();

  //     let h = Math.floor(clock / (60 * 60 * 1000));
  //     clock = clock % (60 * 60 * 1000);
  //     let m = Math.floor(clock / (60 * 1000));
  //     clock = clock % (60 * 1000);
  //     let s = Math.floor(clock / 1000);
  //     let ms = clock % 1000;

  //     this.time = `${this.pad(h, 2)}:${this.pad(m, 2)}:${this.pad(s, 2)}:${ms}`;
  //   }, 1);
  // }

  // public save() {
  //   if (this.taskItem != "") {
  //     this.tasks.push(this.taskItem);
  //     localStorage.setItem("tasks", JSON.stringify(this.tasks));
  //   }
  // }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TestObservables {

  // public Subjecto: any;

  // private data;
  // private value: Array<number> = [];
  // private anyErrors: boolean;
  // private finished: boolean;

  constructor(public http: Http) {
    // let requestStream = Observable.of('https://api.github.com/users');


    // requestStream.subscribe(res => {
    //   this.http.get(res)
    //     .map(res => res.json())
    //     .subscribe(data => console.log(data));
    // });
    // let src = Observable.create(observer => {
    //   observer.next(42);

    //   let id = setTimeout(() => {
    //     try {
    //       // throw 'my bad error';

    //       observer.complete();
    //     } catch (err) {
    //       observer.error(err);
    //     }
    //   }, 2000);

    //   return () => clearTimeout(id); // is run on unsubscribe
    // });

    // let sub = src.subscribe(
    //   res => console.log('next', res),
    //   err => console.error(err),
    //   done => console.info('done')
    // );

    // setTimeout(function () {
    //   sub.unsubscribe();
    // }, 5000);

    // // Create new observable
    // const one = Observable.of(1, 2, 3);

    // // Subscribe to it
    // const oneSubscription = one.subscribe({
    //   next: x => console.log(x),
    //   error: e => console.error(e),
    //   complete: () => console.log('complete')
    // });

    // // "Dispose"/unsubscribe from it
    // oneSubscription.unsubscribe();

    // this.Subjecto = new Subject();
    // this.Subjecto.subscribe(value => console.log('Got new value:', value));
    // this.Subjecto.next('test');
    // this.Subjecto.next(55);
  }
}

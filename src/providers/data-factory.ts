import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataFactory {

  baseUrl: string;

  constructor(public http: Http) {
    this.baseUrl = 'http://rest.learncode.academy/api';
  }

  protected getAll(urlEnding: string): Observable<any[]> {
    return this.http.get(`${this.baseUrl}/${urlEnding}`, this.auth())
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  protected getById(urlEnding: string, id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${urlEnding}/${id}`, this.auth())
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  protected post(urlEnding: string, body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${urlEnding}`, JSON.stringify(body), this.auth())
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.status));
  }

  protected update(urlEnding: string, body: any, id: number) {
    return this.http.put(`${this.baseUrl}/${urlEnding}/${id}`, JSON.stringify(body), this.auth())
      .map(res => res)
      .catch(err => Observable.throw(`Cannot update data: ${err}`));
  }

  protected delete(urlEnding: string, id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${urlEnding}/${id}`);
  }

  private auth() {
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return { headers: headers };
  }
}

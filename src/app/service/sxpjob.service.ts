import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobxp } from '../model/jobxp';

@Injectable({
  providedIn: 'root'
})
export class SxpjobService {
  expURL = 'http://localhost:8080/explab/'
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Jobxp[]>{
    return this.httpClient.get<Jobxp[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Jobxp>{
    return this.httpClient.get<Jobxp>(this.expURL + `detail/${id}`);
  }

  public save(jobxp: Jobxp): Observable<any> {
    return this.httpClient.post<any>(this.expURL + 'create', jobxp);
  }

  public update(id: number, jobxp: Jobxp): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, jobxp);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL +`delete/${id}`);
  }
}

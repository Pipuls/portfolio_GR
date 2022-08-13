import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiServerUrl= environment.apiBaseUrl;
  

  constructor(private http: HttpClient) { }

  public getEducations(): Observable<Education[]>{
    return this.http.get<Education[]>(`${this.apiServerUrl}/education/alledu`);
  }

  public detail(id: number): Observable<Education>{
    return this.http.get<Education>(`${this.apiServerUrl}/education/detail/{id}`);
  }

  public addEducation(education: Education): Observable<Education> {
    return this.http.post<Education>(`${this.apiServerUrl}/education/addedu`, education);
  }

  public updateEducation(education: Education): Observable<Education>{
    return this.http.put<Education>(`${this.apiServerUrl}/education/editedu/{id}`, education);
  }

  public deleteEducation(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/education/deleteedu/{id}`);
  }
}

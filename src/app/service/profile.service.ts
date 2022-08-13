import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  private apiServerUrl= environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiServerUrl}/profile/id/1`);
  }

  public updateProfile(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(`${this.apiServerUrl}/profile/edit/1`, profile);
  }
}

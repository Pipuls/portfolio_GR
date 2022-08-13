import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/model/profile';
import { ProfileService } from 'src/app/service/profile.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public profile: Profile | undefined;
  public editProfile: Profile | undefined;
  isLogged = false;

  constructor(public profileService: ProfileService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getProfile();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  getProfile(): void {
    this.profileService.getProfile().subscribe({
      next: (response: Profile) => {
        this.profile=response;
      }, 
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  onUpdateProfile(profile: Profile): void {
    this.profileService.updateProfile(profile).subscribe(
      (response: Profile) => {
        console.log(response);
        this.getProfile();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}

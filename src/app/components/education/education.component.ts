import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  public educ: Education[] = [];
  public editEducation: Education | undefined;
  public deleteEducation: Education | undefined;

  constructor(
    private educationS: EducationService,
    private tokenService: TokenService
  ) {}
  isLogged = false;

  ngOnInit(): void {
    this.loadEducations();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public loadEducations(): void {
    this.educationS.getEducations().subscribe({
      next: (Response: Education[]) => {
        this.educ = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onOpenModal( mode: String, education?: Education): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#newEducationM');
    } else if (mode === 'delete') {
      this.deleteEducation = education;
      button.setAttribute('data-target', '#deleteEducationM');
    } else if (mode === 'edit') {
      this.editEducation = education;
      button.setAttribute('data-target', '#editEducationM');
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddEducation(addForm: NgForm) {
    document.getElementById('add-education-form')?.click();
    this.educationS.addEducation(addForm.value).subscribe({
      next: (response: Education) => {
        console.log(response);
        this.loadEducations();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }

  public onEditEducation(education: Education) {
    this.editEducation = education;
    document.getElementById('add-education-form')?.click();
    this.educationS.updateEducation(education).subscribe({
      next: (response: Education) => {
        console.log(response);
        this.loadEducations();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onDeleteEducation(idEdu: number): void{
    this.educationS.deleteEducation(idEdu).subscribe({
      next: (response: void) => {
        console.log(response);
        this.loadEducations();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}

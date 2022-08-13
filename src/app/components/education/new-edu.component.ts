import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-new-edu',
  templateUrl: './new-edu.component.html',
  styleUrls: ['./new-edu.component.css']
})
export class NewEduComponent implements OnInit {
  titleE: string;
  institutionE: string;
  placeE: string;
  yearE: string;
  logoE: string;
  
  constructor(private educationS: EducationService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
  
  }
}

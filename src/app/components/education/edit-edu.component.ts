import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent implements OnInit {
  editedu: Education = null;
  
  constructor(private educationS: EducationService, private activatedRouter: ActivatedRoute,private router: Router) { }


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educationS.detail(id).subscribe(
      data =>{
        this.editedu = data;
      }, err =>{
        alert("Se produjo un error al modificar la educación");
        this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void {
 
  }
}

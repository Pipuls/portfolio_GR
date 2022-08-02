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
  tituloE: string;
  institucionE: string;
  lugarE: string;
  anoE: string;
  
  constructor(private educationS: EducationService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educ = new Education(this.tituloE, this.institucionE, this.lugarE, this.anoE);
    this.educationS.save(educ).subscribe(
      data => {
      alert("Educación añadida correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }
}

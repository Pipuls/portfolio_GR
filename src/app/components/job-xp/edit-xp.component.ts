import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobxp } from 'src/app/model/jobxp';
import { SxpjobService } from 'src/app/service/sxpjob.service';

@Component({
  selector: 'app-edit-xp',
  templateUrl: './edit-xp.component.html',
  styleUrls: ['./edit-xp.component.css']
})
export class EditXpComponent implements OnInit {
 expLab : Jobxp =null;

  constructor(private sxpjob: SxpjobService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sxpjob.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        alert("Se produjo un error al modificar la experiencia");
        this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sxpjob.update(id, this.expLab).subscribe(
      data => {
      this.router.navigate(['']);
    }, err => {
      alert("Se produjo un error al modificar la experiencia");
      this.router.navigate(['']);
    })
  }
}

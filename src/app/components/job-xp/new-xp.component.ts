import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobxp } from 'src/app/model/jobxp';
import { SxpjobService } from 'src/app/service/sxpjob.service';

@Component({
  selector: 'app-new-xp',
  templateUrl: './new-xp.component.html',
  styleUrls: ['./new-xp.component.css']
})
export class NewXpComponent implements OnInit {
  puestoE: string = '';
  anoE: string = '';
  empresaE: string = '';
  descripcionE: string = '';

  constructor(private sxpjob: SxpjobService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Jobxp(this.puestoE, this.anoE, this.empresaE, this.descripcionE);
    this.sxpjob.save(expe).subscribe(data => {
      alert("Experiencia añadida correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }

}

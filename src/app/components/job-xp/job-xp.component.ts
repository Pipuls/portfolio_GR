import { Component, OnInit } from '@angular/core';
import { Jobxp } from 'src/app/model/jobxp';
import { SxpjobService } from 'src/app/service/sxpjob.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-job-xp',
  templateUrl: './job-xp.component.html',
  styleUrls: ['./job-xp.component.css']
})
export class JobXpComponent implements OnInit {
  expe: Jobxp [] = [];

  constructor(private sxpjob: SxpjobService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarJobXp();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarJobXp():void {
    this.sxpjob.lista().subscribe(data => {this.expe =data;})
  }
  
  delete(id?: number){
    if (id != undefined){
      this.sxpjob.delete(id).subscribe(
        data => {
          this.cargarJobXp();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
      
    }
  }
}

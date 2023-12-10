import { Component } from '@angular/core';
import { AvisosService } from '../services/avisos.service';
import { Router } from '@angular/router';
import { PlaticasService } from '../services/platicas.service';

@Component({
  selector: 'app-platicas-student',
  templateUrl: './platicas-student.component.html',
  styleUrls: ['./platicas-student.component.css']
})
export class PlaticasStudentComponent {
  platicas: any[];
  constructor(private av:PlaticasService,private router:Router){
  
   
  
    this.av.getAll().subscribe(data => {
      this.platicas = data.sort((a, b) => new Date(b.data.fecha).getTime() - new Date(a.data.fecha).getTime());
      console.log(this.platicas);
     });
   
  }

  detalle(id:string){
    localStorage.setItem("detalleid",id)
    this.router.navigate(['pdetalle-student']);
 
  }

}

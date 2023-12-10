import { Component } from '@angular/core';
import { AvisosService } from '../services/avisos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avisos-student',
  templateUrl: './avisos-student.component.html',
  styleUrls: ['./avisos-student.component.css']
})
export class AvisosStudentComponent {
  avisos: any[];
  constructor(private av:AvisosService,private router:Router){
  
   
  
    this.av.getAll().subscribe(data => {
      this.avisos = data.sort((a, b) => new Date(b.data.fecha).getTime() - new Date(a.data.fecha).getTime());
      console.log(this.avisos);
     });
   
  }

  detalle(id:string){
    localStorage.setItem("detalleid",id)
    this.router.navigate(['blog-student']);
 
  }

}

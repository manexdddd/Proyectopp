import { Component } from '@angular/core';
import { AvisosService } from '../services/avisos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avisos-public',
  templateUrl: './avisos-public.component.html',
  styleUrls: ['./avisos-public.component.css']
})
export class AvisosPublicComponent {
  avisos: any[];
  constructor(private av:AvisosService,private router:Router){
  
   
  
    this.av.getAll().subscribe(data => {
      this.avisos = data.sort((a, b) => new Date(b.data.fecha).getTime() - new Date(a.data.fecha).getTime());
      console.log(this.avisos);
     });
   
  }

  detalle(id:string){
    localStorage.setItem("detalleid",id)
    this.router.navigate(['blog-public']);
 
  }

}

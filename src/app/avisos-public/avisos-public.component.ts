import { Component } from '@angular/core';
import { AvisosService } from '../services/avisos.service';

@Component({
  selector: 'app-avisos-public',
  templateUrl: './avisos-public.component.html',
  styleUrls: ['./avisos-public.component.css']
})
export class AvisosPublicComponent {
  avisos: any[];
  constructor(private av:AvisosService){
  
   
  
    this.av.getAll().subscribe(data => {
      this.avisos = data.sort((a, b) => new Date(b.data.fecha).getTime() - new Date(a.data.fecha).getTime());
      console.log(this.avisos);
     });
   
  }

  
}

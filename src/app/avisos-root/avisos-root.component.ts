import { Component } from '@angular/core';
import { AvisosService } from '../services/avisos.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-avisos-root',
  templateUrl: './avisos-root.component.html',
  styleUrls: ['./avisos-root.component.css']
})
export class AvisosRootComponent {
avisos: any[];
 avisof:any


constructor(private av:AvisosService,private  storage: AngularFireStorage){

 

  this.av.getAll().subscribe(data => {
    this.avisos = data;
    console.log(this.avisos)
   });
 
}


eliminar(id:string): void {
this.av.getaviso(id).subscribe(avisofa => {
    this.avisof = avisofa;
    
  const url = this.avisof.foto
    console.log(avisofa)
  return this.storage.storage.refFromURL(url).delete();
  });
  this.av.delete(id).then(() => {
   
      
    
    console.log(id);
  }).catch((error) => {
    console.error('Error deleting aviso:', error);
  });
  
 }
}

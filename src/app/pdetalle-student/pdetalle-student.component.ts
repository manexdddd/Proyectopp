import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RootService } from '../services/root.service';
import { PlaticasService } from '../services/platicas.service';

@Component({
  selector: 'app-pdetalle-student',
  templateUrl: './pdetalle-student.component.html',
  styleUrls: ['./pdetalle-student.component.css']
})
export class PdetalleStudentComponent {
  platica: any;
  detalleid = localStorage.getItem("detalleid")
  avises:any[];
  admin:any
  constructor(private av: PlaticasService, private router: Router, private ro: RootService) {
    console.log('Constructor called');
    console.log('Detalle ID:', this.detalleid);
  
    this.av.getplatica(this.detalleid).subscribe(data => {
      this.platica = data;
    console.log(this.platica.tema)
     });
     


     
  }



  log(){
    this.router.navigate(['/login']);

  }
  detalle(id:string){
    localStorage.setItem("detalleid",id)
    window.location.reload();
 
  }
  ngOnDestroy(): void{
    localStorage.setItem("detalleid","")
}

back(){
  localStorage.setItem("detalleid","")
  this.router.navigate(['platicas-student']);

}

RecentAvisos(avisos) {
  // Sort the avisos array in descending order based on the date
  const sortedAvisos = avisos.sort((a, b) => new Date(b.data.fecha).getTime() - new Date(a.data.fecha).getTime());
 
  // Use the slice method to get the first three elements of the sorted array
  const threeMostRecentAvisos = sortedAvisos.slice(0, 3);
 
  return threeMostRecentAvisos;
 }
}

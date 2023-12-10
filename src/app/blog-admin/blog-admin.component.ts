import { Component } from '@angular/core';
import { AvisosService } from '../services/avisos.service';
import { RootService } from '../services/root.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.css']
})
export class BlogAdminComponent {
  aviso: any;
  detalleid = localStorage.getItem("detalleid")
  avises:any[];
  admin:any
  constructor(private av:AvisosService,private router:Router,private ro:RootService){
  
   
  
    this.av.getaviso(this.detalleid).subscribe(data => {
         this.aviso = data
         this.ro.getroot(this.aviso.autor).subscribe(usuario => {
          this.admin= usuario;
          
        });
    
     });
     
   
     this.av.getAll().subscribe(data => {
      this.avises = this.RecentAvisos(data);
      console.log(this.avises);
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
  this.router.navigate(['avisos-root']);

}

RecentAvisos(avisos) {
  // Sort the avisos array in descending order based on the date
  const sortedAvisos = avisos.sort((a, b) => new Date(b.data.fecha).getTime() - new Date(a.data.fecha).getTime());
 
  // Use the slice method to get the first three elements of the sorted array
  const threeMostRecentAvisos = sortedAvisos.slice(0, 3);
 
  return threeMostRecentAvisos;
 }
}


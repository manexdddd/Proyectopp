import { Component, OnInit } from '@angular/core';
import { AvisosService } from '../services/avisos.service';
import { RootService } from '../services/root.service';
import { Router } from '@angular/router';
import { PlaticasService } from '../services/platicas.service';




@Component({

  selector: 'app-home-public',
  templateUrl: './home-public.component.html',
  styleUrls: ['./home-public.component.css']
})
export class HomePublicComponent  {
  counter = 0;
  text = ['CEO DevFolio,Frontend Developer,Graphic Designer', 'Web Developer', ',Web Designer3'];
  aviso: any;
  detalleid = localStorage.getItem("detalleid")
  avises:any[];
  talks:any[];
  admin:any
  meta: any;
  constructor(private av:AvisosService,private router:Router,private ro:RootService,private pl:PlaticasService){
  
   
     this.av.getAll().subscribe(data => {
      this.avises = this.RecentAvisos(data);
      console.log(this.avises);
     });

   
     this.pl.getAll().subscribe(data => {
      this.talks = this.RecentAvisos(data);
    
     });

     
  }
  ngOnInit(): void {
    setInterval(() => this.change(), 3000);

     this.meta.updateTag({
     name: 'theme-color',
     content: '#305f88' // Replace with your desired color
   });
 
  }

  change() {
    let elem = document.querySelector(".text-slider-items");
    if (elem) {
      elem.innerHTML = this.text[this.counter];
      this.counter++;
      if (this.counter >= this.text.length) { this.counter = 0; }
      let elems = document.querySelectorAll<HTMLElement>(".text-slider-items");

  elems.forEach((elem) => {
    elem.style.animation = 'none';
    elem.offsetHeight; /* trigger reflow */
    elem.style.animation = ''; 
  })
}

      
}

RecentAvisos(avisos) {
  // Sort the avisos array in descending order based on the date
  const sortedAvisos = avisos.sort((a, b) => new Date(b.data.fecha).getTime() - new Date(a.data.fecha).getTime());
 
  // Use the slice method to get the first three elements of the sorted array
  const threeMostRecentAvisos = sortedAvisos.slice(0, 3);
 
  return threeMostRecentAvisos;
 }

 detalle(id:string){
  localStorage.setItem("detalleid",id)
  this.router.navigate(['/blog-public']);

}
}


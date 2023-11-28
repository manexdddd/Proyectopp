import { ChangeDetectorRef, Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TutorService } from '../services/tutor.service';
import { PlaticasService } from '../services/platicas.service';
import { AlumnosService } from '../services/alumnos.service';

@Component({
  selector: 'app-asistentes-root',
  templateUrl: './asistentes-root.component.html',
  styleUrls: ['./asistentes-root.component.css']
})
export class AsistentesRootComponent {

  prueb =localStorage.getItem("as")
  
  avisoeditForm! : FormGroup;
  platica:any
  asistentesx:any
  progreso: boolean;
  imagen:boolean=false;
  newe:any
  alumnos: any;
  filteredAsistentes: any;
  asistentes: any;
 
 constructor(private av:PlaticasService,private  storage: AngularFireStorage, private afs: AngularFirestore
   ,private changeDetector: ChangeDetectorRef,
   private  fb: FormBuilder,private router:Router,private alu:AlumnosService){
 
  
 
 this.av.getplatica(this.prueb).subscribe(data => {
 this.platica = data;
 console.log(this.platica.asistentes);
 this.alu.getAll(this.platica.asistentes).subscribe(data => {
 this.asistentesx= data;
 console.log(this.asistentesx);
 }, error => {
 console.log('received an error', error);
 });
});
 }
 
 

}

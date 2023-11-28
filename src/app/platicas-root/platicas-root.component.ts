import { ChangeDetectorRef, Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AvisosService } from '../services/avisos.service';
import { PlaticasService } from '../services/platicas.service';
import * as firebase from 'firebase/compat';

@Component({
  selector: 'app-platicas-root',
  templateUrl: './platicas-root.component.html',
  styleUrls: ['./platicas-root.component.css']
})
export class PlaticasRootComponent {
  platicas: any[];
  platicaf:any
  platicae ={
    ponente:'',
    tema:'',
    asistentes:'',
    cupo:'',
    foto:'',
       descripcion:'',
       lugar:'',
       fecha:'',
       hora:''
  };
  
  
  avisoeditForm! : FormGroup;
  progreso: boolean;
  imagen:boolean=false;
  newe:any
 
 constructor(private av:PlaticasService,private  storage: AngularFireStorage, private afs: AngularFirestore
   ,private changeDetector: ChangeDetectorRef,
   private  fb: FormBuilder,private router:Router){
 
  
 
     this.av.getAll().subscribe(data => {
       this.platicas = data.sort((a, b) => new Date(b.data.fecha).getTime() - new Date(a.data.fecha).getTime());
       console.log(this.platicas);
      });
  
 }
 
 ngOnInit():void{
   this.avisoeditForm = this.initForm();
 }
 
 eliminar(id:string): void {
 this.av.getplatica(id).subscribe(platicaf => {
     this.platicaf = this.platicaf;
     
   const url = this.platicaf.foto
     
   return this.storage.storage.refFromURL(url).delete();
   });
   this.av.delete(id).then(() => {
    
       
     
     console.log(id);
   }).catch((error) => {
     console.error('Error deleting platica:', error);
   });
   
  }
 
  editar(id:string){
   
   localStorage.setItem("avid","");
    localStorage.setItem("avid",id);
   this.av.getaviso(id).subscribe(platicae => {
     this.platicae = platicae as {  ponente:'',
     tema:'',
     asistentes:'',
     cupo:'',
     foto:'',
        descripcion:'',
        lugar:'',
        fecha:'',
        hora:''};
     if(this.platicae.foto == ""){
       this.imagen =true;
     }
 
     
   });
  }
 
  eliminaf(){
   const url = this.platicae.foto
     imagen:true;
     this.afs.doc('platicas/'+localStorage.getItem("avid")).update({ foto: '' });
     
     return this.storage.storage.refFromURL(url).delete();
     
  }
 
  uploadImage(event) {
   const file = event.target.files[0];
   this.imagen=false;
   const filePath = `platicas/${new Date().getTime()}_${file.name}`;
   const fileRef = this.storage.ref(filePath);
   const task = this.storage.upload(filePath, file);
 
   task.snapshotChanges().pipe(
     finalize(() => {
       fileRef.getDownloadURL().subscribe(url => {
         this.platicae.foto = url;
         
       });
     })
   ).subscribe();
 }
 
 editardocumento(){
   
   console.log(this.platicae.tema);
   this.av.update(localStorage.getItem("avid"),{ foto:  this.platicae.foto,
      tema:
     this.platicae.tema,
     descripcion :
     this.platicae.descripcion,
     hora :
     this.platicae.hora,
     fecha :
     this.platicae.fecha,
     lugar :
     this.platicae.lugar,
     ponente :
     this.platicae.ponente,
     cupo :
     this.platicae.cupo
   }).then(() => {
     
   
    });
   localStorage.setItem("avid","");
 }
 
 cancelar(){
   localStorage.setItem("avid","");
 }
 
 
 
 initForm(): FormGroup{
   return this.fb.group({
     tema: [''],
     lugar: [''],
     fecha: [''],
     descripcion:[''],
     hora: [''],
     cupo: [''],
     ponente: [''],
   });
 }
 
 detalle(id:string){
   localStorage.setItem("as",id)
   this.router.navigate(['people-root']);
 
 }
}

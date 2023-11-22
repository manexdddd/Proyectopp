import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { finalize } from 'rxjs';
import { PsycoService } from '../services/psyco.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { TutorService } from '../services/tutor.service';

@Component({
  selector: 'app-tutorv-root',
  templateUrl: './tutorv-root.component.html',
  styleUrls: ['./tutorv-root.component.css']
})
export class TutorvRootComponent {
  admins: any[];
  adminf:any
  admine ={
   nombre:'',
   paterno:'',
  rol:'tutor',
   materno:'',
   foto:'',
   direccion:'',
   telefono:'',
   division:'',
   carrera:'',
   grupo:''
  };
  
  
  avisoeditForm! : FormGroup;
  progreso: boolean;
  imagen:boolean=false;
  newe:any
 
 constructor(private av:TutorService,private  storage: AngularFireStorage, private afs: AngularFirestore
   ,private changeDetector: ChangeDetectorRef,
   private  fb: FormBuilder,private router:Router){
 
  
 
     this.av.getAll().subscribe(data => {
       this.admins = data
       console.log(this.admins);
      });
  
 }
 
 ngOnInit():void{
   this.avisoeditForm = this.initForm();

   

 }
 
 eliminar(id:string): void {
 this.av.getutor(id).subscribe(adminfa => {
     this.adminf = adminfa;
     
   const url = this.adminf.foto
     //console.log(avisofa)
   return this.storage.storage.refFromURL(url).delete();
   });
   this.av.delete(id).then(() => {
    this.imagen = true;
       
     
     console.log(id);
   }).catch((error) => {
     console.error('Error deleting aviso:', error);
   });
   
  }
 
  editar(id:string){
   
   localStorage.setItem("avid","");
    localStorage.setItem("avid",id);
   this.av.getutor(id).subscribe(admine => {
     this.admine = admine as { nombre:'',
     paterno:'',
     materno:'',
     rol:'admin',
     foto:'',
     direccion:'',
     telefono:'',
     division:'',
     carrera:'',
     grupo:'',
    };
     if(this.admine.foto == ""){
       this.imagen =true;
     }
 
     
   });
  }
 
  eliminaf(){
   const url = this.admine.foto
     imagen:true;
     this.afs.doc('admin/'+localStorage.getItem("avid")).update({ foto: '' });
     
     return this.storage.storage.refFromURL(url).delete();
     
  }
 
  uploadImage(event) {
    const file = event.target.files[0];
    this.imagen=false;
    const filePath = `admins/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
  
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          this.admine.foto = url;
          
        });
      })
    ).subscribe();
  }
 
 editardocumento(){
   
   console.log(this.admine.nombre);
   this.av.update(localStorage.getItem("avid"),{ foto:  this.admine.foto,
      nombre:
     this.admine.nombre,
     paterno :
     this.admine.paterno,
     materno :
     this.admine.materno,
     rol:
     "tutor",
     direccion:
     this.admine.direccion,
     telefono:
     this.admine.telefono,
     divison:
     this.admine.division,
     carrera:
     this.admine.carrera,
     grupo:
     this.admine.grupo
   }).then(() => {
     
   
    });
   localStorage.setItem("avid","");
 }
 
 cancelar(){
   localStorage.setItem("avid","");
 }
 
 
 
 initForm(): FormGroup{
   return this.fb.group({
     nombre: [''],
     paterno: [''],
     materno: [''],
     tel: [''],
     direccion: [''],
     division: [''],
     grupo:[''],
     carrera:[''],
   });
 }
 
 detalle(id:string){
   localStorage.setItem("detalleid",id)
   this.router.navigate(['blog-root']);
 
 }
}

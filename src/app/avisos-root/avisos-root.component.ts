import { ChangeDetectorRef, Component } from '@angular/core';
import { AvisosService } from '../services/avisos.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { finalize } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avisos-root',
  templateUrl: './avisos-root.component.html',
  styleUrls: ['./avisos-root.component.css']
})
export class AvisosRootComponent {
avisos: any[];
 avisof:any
 avisoe ={
  titulo:'',
  descripcion:'',
  fecha:'',
  contenido:'',
  foto:'',
     lugar:'',
 };
 
 
 avisoeditForm! : FormGroup;
 progreso: boolean;
 imagen:boolean=false;
 newe:any

constructor(private av:AvisosService,private  storage: AngularFireStorage, private afs: AngularFirestore
  ,private changeDetector: ChangeDetectorRef,
  private  fb: FormBuilder,private router:Router){

 

    this.av.getAll().subscribe(data => {
      this.avisos = data.sort((a, b) => new Date(b.data.fecha).getTime() - new Date(a.data.fecha).getTime());
      console.log(this.avisos);
     });
 
}

ngOnInit():void{
  this.avisoeditForm = this.initForm();
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

 editar(id:string){
  
  localStorage.setItem("avid","");
   localStorage.setItem("avid",id);
  this.av.getaviso(id).subscribe(avisoe => {
    this.avisoe = avisoe as { titulo:'',
    descripcion:'',
    fecha:'',
    contenido:'',
    foto:'',
       lugar:'',};
    if(this.avisoe.foto == ""){
      this.imagen =true;
    }

    
  });
 }

 eliminaf(){
  const url = this.avisoe.foto
    imagen:true;
    this.afs.doc('avisos/'+localStorage.getItem("avid")).update({ foto: '' });
    
    return this.storage.storage.refFromURL(url).delete();
    
 }

 uploadImage(event) {
  const file = event.target.files[0];
  this.imagen=false;
  const filePath = `avisos/${new Date().getTime()}_${file.name}`;
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(filePath, file);

  task.snapshotChanges().pipe(
    finalize(() => {
      fileRef.getDownloadURL().subscribe(url => {
        this.avisoe.foto = url;
        
      });
    })
  ).subscribe();
}

editardocumento(){
  
  console.log(this.avisoe.titulo);
  this.av.update(localStorage.getItem("avid"),{ foto:  this.avisoe.foto,
     titulo :
    this.avisoe.titulo,
    descripcion :
    this.avisoe.descripcion,
    contenido :
    this.avisoe.contenido,
    fecha :
    this.avisoe.fecha,
    lugar :
    this.avisoe.lugar
  }).then(() => {
    
  
   });
  localStorage.setItem("avid","");
}

cancelar(){
  localStorage.setItem("avid","");
}



initForm(): FormGroup{
  return this.fb.group({
    titulo: [''],
    lugar: [''],
    fecha: [''],
    descripcion:[''],
    contenido: [''],
    
  });
}

detalle(id:string){
  localStorage.setItem("detalleid",id)
  this.router.navigate(['blog-root']);

}
}

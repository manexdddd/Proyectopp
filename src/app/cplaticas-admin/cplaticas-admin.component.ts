import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, finalize } from 'rxjs';
import { RootService } from '../services/root.service';
import { PlaticasService } from '../services/platicas.service';

@Component({
  selector: 'app-cplaticas-admin',
  templateUrl: './cplaticas-admin.component.html',
  styleUrls: ['./cplaticas-admin.component.css']
})
export class CplaticasAdminComponent {
  constructor(private  fb: FormBuilder,private ro :PlaticasService,private afs: AngularFirestore,private  storage: AngularFireStorage) {}
email = localStorage.getItem('email');
  progreso: boolean;
  subscription: Subscription;
  auth: any;
  avisoForm! : FormGroup;
  imagen:boolean=false;

  usuario: any;
  platica ={
    ponente:'',
    tema:'',
    cupo:'',
    foto:'',
       descripcion:'',
       lugar:'',
       fecha:'',
       hora:'',
       asistentes: []
   };
  
   
   
   


   uploadImage(event) {
    const file = event.target.files[0];
    this.imagen=false;
    const filePath = `platicas/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          this.platica.foto = url;
          
        });
      })
    ).subscribe();
  }
  ngOnInit(): void{
    
    this.avisoForm = this.initForm();
    if(this.platica.foto===""){
      this.imagen=true;
    }

   
  }
  
    
  
  

  initForm(): FormGroup{
    return this.fb.group({
      ponente: ['', [Validators.required]],
      tema: ['', [Validators.required]],
      cupo: ['', [Validators.required]],
      lugar: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      contenido: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      foto: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
   
    this.ro.crearDocumento(this.platica)

    
        
  }
  eliminar() {
    const url = this.platica.foto
    this.imagen=true;
    this.afs.doc('platicas/id').update({ foto: '' });
    this.platica.foto = ""
    return this.storage.storage.refFromURL(url).delete();
    
   }
}
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Subscription, finalize } from 'rxjs';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { RootService } from '../services/root.service';

@Component({
  selector: 'app-cplaticas-admin',
  templateUrl: './cplaticas-admin.component.html',
  styleUrls: ['./cplaticas-admin.component.css']
})
export class CplaticasAdminComponent {
  constructor(private  fb: FormBuilder,private ro :RootService,private afs: AngularFirestore,private  storage: AngularFireStorage) {}
  email = localStorage.getItem('email');
    progreso: boolean;
    subscription: Subscription;
    auth: any;
    avisoForm! : FormGroup;
    imagen:boolean=false;
  
    usuario: any;
    aviso ={
      titulo:'',
      descripcion:'',
      fecha:'',
      contenido:'',
      foto:'',
         lugar:'',
         autor:this.email,
     };
    
     
     
     
  
  
     uploadImage(event) {
      const file = event.target.files[0];
      this.imagen=false;
      const filePath = `avisos/${new Date().getTime()}_${file.name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
  
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.aviso.foto = url;
            
          });
        })
      ).subscribe();
    }
    ngOnInit(): void{
      
      this.avisoForm = this.initForm();
      if(this.aviso.foto===""){
        this.imagen=true;
      }
  
     
    }
    
      
    
    
  
    initForm(): FormGroup{
      return this.fb.group({
        titulo: ['', [Validators.required]],
        lugar: ['', [Validators.required]],
        fecha: ['', [Validators.required]],
        descripcion: ['', [Validators.required]],
        contenido: ['', [Validators.required]],
        
      });
    }
  
    onSubmit(): void {
     
      this.ro.crearDocumento(this.aviso)
  
      
          
    }
    eliminar() {
      const url = this.aviso.foto
      this.imagen=true;
      this.afs.doc('avisos/id').update({ foto: '' });
      this.aviso.foto = ""
      return this.storage.storage.refFromURL(url).delete();
      
     }
  }
  


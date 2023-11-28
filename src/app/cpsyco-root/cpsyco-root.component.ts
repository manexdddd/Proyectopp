import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, finalize } from 'rxjs';
import { RootService } from '../services/root.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { PsycoService } from '../services/psyco.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cpsyco-root',
  templateUrl: './cpsyco-root.component.html',
  styleUrls: ['./cpsyco-root.component.css']
})
export class CpsycoRootComponent {
  constructor(private  fb: FormBuilder,private ro :RootService,
    private afs: AngularFirestore,private  storage: AngularFireStorage,private router:Router,
    private auth:AuthService) {}
email = localStorage.getItem('email');
  progreso: boolean;
  subscription: Subscription;
  
  avisoForm! : FormGroup;
  imagen:boolean=false;

  usuario: any;
  admin ={
    nombre:'',
    paterno:'',
    materno:'',
    carrera:'',
    direccion:'',
       telefono:'',
       foto:'',
       psw:'',
       rol:'admin',
email:''
      };
  
   
   
   


   uploadImage(event) {
    const file = event.target.files[0];
    this.imagen=false;
    const filePath = `admins/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          this.admin.foto = url;
          
        });
      })
    ).subscribe();
  }
  ngOnInit(): void{
    
    this.avisoForm = this.initForm();
    if(this.admin.foto===""){
      this.imagen=true;
    }

}



initForm(): FormGroup{
  return this.fb.group({
    nombre: ['', [Validators.required]],
    paterno: ['', [Validators.required]],
    materno: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    carrera: ['', [Validators.required]],
    email:['', [Validators.required]],
    psw:['', [Validators.required]],
  });
}

onSubmit(): void {

  const {email,psw,nombre,materno,paterno,rol} = this.admin
 this.auth.registro(email,psw)

        .then(() => {
          // El usuario ha iniciado sesión con éxito
          this.ro.crearPsyco(email,this.admin)
          alert("Registro correcto")
          this.router.navigate(['/psyco-root']);
        })
        .catch(error => {
          // Manejo de errores de inicio de sesión
          alert("registro incorrecto")
        })
  
      
}
eliminar() {
  const url = this.admin.foto
  this.imagen=true;
  this.afs.doc('admin/id').update({ foto: '' });
  this.admin.foto = ""
  return this.storage.storage.refFromURL(url).delete();
  
 }
}

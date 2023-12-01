import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, finalize } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { RootService } from '../services/root.service';

@Component({
  selector: 'app-ctutor-root',
  templateUrl: './ctutor-root.component.html',
  styleUrls: ['./ctutor-root.component.css']
})
export class CtutorRootComponent {
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
       rol:'tutor',
email:'',
division:'',grupo:''
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
    division:['', [Validators.required]],
    grupo:['', [Validators.required]],
  });
}

onSubmit(): void {

  const {email,psw,nombre,materno,paterno,rol} = this.admin
 this.auth.registro(email,psw)

        .then(() => {
          // El usuario ha iniciado sesión con éxito
          this.ro.crearPsyco(email,this.admin)
          alert("Registro correcto")
          this.router.navigate(['/tutorv-root']);
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

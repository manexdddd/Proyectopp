import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RootService } from '../services/root.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Subscription, finalize } from 'rxjs';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';



@Component({
  selector: 'app-edit-alumno-tutor',
  templateUrl: './edit-alumno-tutor.component.html',
  styleUrls: ['./edit-alumno-tutor.component.css']
})
export class EditAlumnoTutorComponent {

  registroForm! : FormGroup;
  progreso: boolean;
  canalizadoPorTutor: boolean = false;
  canalizadoPorVoluntario: boolean = false;
  subscription: Subscription;

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private ro:RootService,
    private auth:AuthService, private afs: AngularFirestore,private storage: AngularFireStorage) {
      this.usuarioe = afs.doc("admin"+"/"+localStorage.getItem('email'))
    
    }
    usuarioe: any;
    usuario: any;
    email: string;
    imagen:boolean=false;
   
    ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.ro.getroot(this.email).subscribe(usuario => {
      this.usuario = usuario;
      
      if(this.usuario.foto===""){
        this.imagen=true;
      }
    });
    
   
  }

  

  EditarRoot() {
    this.usuarioe.update({
      nombre: this.usuario.nombre,
      paterno: this.usuario.paterno,
      carrera: this.usuario.carrera,
      puesto: this.usuario.puesto,
      materno: this.usuario.materno,
      telefono: this.usuario.telefono,
      direccion: this.usuario.direccion
    })
    .then(() => alert("Se guardaron los cambios"))
    .catch((error) => alert("No se guardaron los cambios "+error));
   }
   eliminar() {
    const url = this.usuario.foto
    imagen:true;
    this.afs.doc('admin/'+this.email).update({ foto: '' });
    return this.storage.storage.refFromURL(url).delete();
    
   }
   uploadImage(event) {
    const file = event.target.files[0];
    this.imagen=false;
    const filePath = `usuarios/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          this.usuario.foto = url;
          this.afs.doc('admin/'+this.email).update({ foto: url });
          
        });
        
      })
    ).subscribe();

    
  }
}


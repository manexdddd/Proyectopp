import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AlumnosService } from '../services/alumnos.service';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-editperfil-student',
  templateUrl: './editperfil-student.component.html',
  styleUrls: ['./editperfil-student.component.css']
})
export class EditperfilStudentComponent {
  constructor(private renderer: Renderer2, private elementRef: ElementRef, private alu:AlumnosService,
    private auth:AuthService, private afs: AngularFirestore,private storage: AngularFireStorage) {
      this.usuarioe = afs.doc("alumnos"+"/"+localStorage.getItem('email'))
    }
    usuarioe: any;
    usuario: any;
    email: string;
    imagen:boolean=false;
   
    ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.alu.getalumno(this.email).subscribe(usuario => {
      this.usuario = usuario;
      
      if(this.usuario.foto===""){
        this.imagen=true;
      }
    });
    
   
  }

  Editarstudent() {
    this.usuarioe.update({
      nombre: this.usuario.nombre,
      paterno: this.usuario.paterno,
      materno: this.usuario.materno,
      edad: this.usuario.edad,
      fnacimiento: this.usuario.fnacimiento,
      telefono: this.usuario.telefono,
      direccion: this.usuario.direccion,
      emailp: this.usuario.emailp,
      especialidad: this.usuario.especialidad,
      email: this.usuario.email,
      tsangre: this.usuario.tsangre,

    })
    .then(() => alert("Se guardaron los cambios"))
    .catch((error) => alert("No se guardaron los cambios "+error));
   }
   eliminar() {
    const url = this.usuario.foto
    imagen:true;
    this.afs.doc('alumnos/'+this.email).update({ foto: '' });
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
          this.afs.doc('alumnos/'+this.email).update({ foto: url });
          
        });
        
      })
    ).subscribe();

    
  }
}

import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AlumnosService } from '../services/alumnos.service';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-perfil-student',
  templateUrl: './perfil-student.component.html',
  styleUrls: ['./perfil-student.component.css']
})
export class PerfilStudentComponent {
  entrevistas: any[] = [];
  usuarioe: any;
  usuario: any;
  email: string;
  imagen: boolean = false;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private alu: AlumnosService,
    private auth: AuthService,
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.usuarioe = afs.doc("alumnos" + "/" + localStorage.getItem('email'));
  }

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.alu.getalumno(this.email).subscribe(usuario => {
      this.usuario = usuario;

      if (this.usuario.foto === "") {
        this.imagen = true;
      }

      // Acceder al campo 'entrevistas' en el documento 'alumnos'
      this.entrevistas = this.usuario.entrevistas || [];
    });
  }

  // Resto del código...

}

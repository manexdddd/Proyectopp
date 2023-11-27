import { ChangeDetectorRef, Component } from '@angular/core';
import { SesionesService } from '../services/sesiones.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { finalize } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rescheduled-admin',
  templateUrl: './rescheduled-admin.component.html',
  styleUrls: ['./rescheduled-admin.component.css']
})
export class RescheduledAdminComponent {
  sesiones: any[];
  sesionesf: any;
  sesionee = {
    nombreAlumno: '',
    nombreMedico: '',
    tipo: '',
    fecha: '',
    hora: '',
    numeroC: '',
  };

  sesioneditForm!: FormGroup;
  progreso: boolean;
  newe: any;

  constructor(
    private av: SesionesService,
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    private changeDetector: ChangeDetectorRef,
    private fb: FormBuilder,
    private router: Router
  ) {

    this.av.getAll().subscribe(data => {
      this.sesiones = data;
      console.log(this.sesiones)
     });

  }

  ngOnInit(): void {
    this.sesioneditForm = this.initForm();
    this.av.getAll().subscribe((data) => {
      // Filtra solo las sesiones de tipo "Reprogramado"
      this.sesiones = data.filter((sesion) => sesion.data.tipo === 'Reprogramado');
      console.log(this.sesiones);
    });
  }

  eliminar(id: string): void {
    this.av.getSesion(id).subscribe((avisofa) => {
      this.sesionesf = avisofa;

      const url = this.sesionesf.foto;
      console.log(avisofa);
      return this.storage.storage.refFromURL(url).delete();
    });
    this.av
      .delete(id)
      .then(() => {
        console.log(id);
      })
      .catch((error) => {
        console.error('Error deleting aviso:', error);
      });
  }

  editar(id: string) {
    localStorage.setItem('avid', '');
    localStorage.setItem('avid', id);
    this.av.getSesion(id).subscribe((sesionee) => {
      this.sesionee = sesionee as { nombreAlumno: '',
        nombreMedico: '',
        tipo: '',
        fecha: '',
        hora: '',
        numeroC: '',};
    });
  }

  editardocumento(){
  
    console.log(this.sesionee.nombreAlumno);
    this.av.update(localStorage.getItem("avid"),{ nombreAlumno:  this.sesionee.nombreAlumno,
      nombreMedico :
      this.sesionee.nombreMedico,
      tipo :
      this.sesionee.tipo,
      fecha :
      this.sesionee.fecha,
      hora :
      this.sesionee.hora,
      numeroC:
      this.sesionee.numeroC
    }).then(() => {
      
    
     });
    localStorage.setItem("avid","");
  }
  

  cancelar() {
    localStorage.setItem('avid', '');
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombreAlumno: [''],
      nombreMedico: [''],
      tipo: [''],
      fecha: [''],
      hora: [''],
      numeroC: [''],
    });
  }

}
import { ChangeDetectorRef, Component } from '@angular/core';
import { SesionesService } from '../services/sesiones.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { finalize } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attention-admin',
  templateUrl: './attention-admin.component.html',
  styleUrls: ['./attention-admin.component.css']
})
export class AttentionAdminComponent {
  constructor(private fb: FormBuilder, private afs: AngularFirestore) {}

  email = localStorage.getItem('email');
  progreso: boolean;
  sesionForm!: FormGroup;
  
  sesion = {
    nombreAlumno: '',
    nombreMedico: '',
    tipo: '', // Puede ser seguimiento, nuevo o reagendado
    fecha: '',
    hora: '',
    numeroC: '',
  };
  successMessage: string | null = null;

  ngOnInit(): void {
    this.sesionForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombreAlumno: ['', [Validators.required]],
      nombreMedico: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      numeroC: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    // Puedes acceder a los valores del formulario con this.sesionForm.value
    this.sesion = this.sesionForm.value;
    this.crearDocumentoSesion();
  }

  crearDocumentoSesion(): void {
    this.afs.collection('sesiones').add(this.sesion).then(() => {
      this.successMessage = 'Sesión creada con éxito';
      this.resetFormAndMessage();
    });
  }

  resetFormAndMessage(): void {
    setTimeout(() => {
      this.sesionForm.reset();
      this.successMessage = null;
    }, 3000);
  }
}



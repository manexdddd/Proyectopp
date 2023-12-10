import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage,  } from '@angular/fire/compat/storage';
import { Subscription, finalize } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-solicitar-atencion',
  templateUrl: './solicitar-atencion.component.html',
  styleUrls: ['./solicitar-atencion.component.css']
})
export class SolicitarAtencionComponent implements OnInit{
  
  solicitudForm!: FormGroup;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.solicitudForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      canalizacion: ['', [Validators.required]],
      carrera: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      grupo: ['', [Validators.required]],
      motivo: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      numeroC: ['', [Validators.required]],
      observaciones: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      tutor: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    // Puedes acceder a los valores del formulario con this.sesionForm.value
    const solicitud = this.solicitudForm.value;
    this.crearDocumentoSolicitud(solicitud);
  }

  crearDocumentoSolicitud(solicitud: any): void {
    this.afs.collection('solicitudes').add(solicitud).then(() => {
      console.log('Solicitud Enviada con Éxito');
      this.resetForm();
    });
  }

  resetForm(): void {
    this.solicitudForm.reset();
  }
}
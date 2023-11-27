import { Component } from '@angular/core';
import { SolicitudesService } from '../services/solicitudes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests-admin',
  templateUrl: './requests-admin.component.html',
  styleUrls: ['./requests-admin.component.css']
})
export class RequestsAdminComponent {
  solicitudes: any[] = [];

  constructor(private as: SolicitudesService) {

    this.as.getAll().subscribe(data => {
      this.solicitudes = data;
      console.log(this.solicitudes)
     });
  }

  ngOnInit(): void {
    this.as.getAll().subscribe((solicitudes) => {
      this.solicitudes = solicitudes;
      console.log(this.solicitudes);
    });
  }

  eliminarSolicitud(id: string): void {
    this.as.delete(id)
      .then(() => console.log('Solicitud eliminada'))
      .catch((error) => console.error('Error al eliminar solicitud:', error));
  }
}

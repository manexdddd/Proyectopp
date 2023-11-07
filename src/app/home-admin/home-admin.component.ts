import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AlumnosService } from '../services/alumnos.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {
  currentUsuario: any;
  usuario: any;
  email: string;
  constructor(private renderer: Renderer2, private elementRef: ElementRef, private alu:AlumnosService,
    private auth:AuthService) {}

    ngOnInit(): void {
     
      this.email = localStorage.getItem('email');
  
      this.alu.getalumno(this.email).subscribe(usuario => {
        this.usuario = usuario;
      });
    }
}

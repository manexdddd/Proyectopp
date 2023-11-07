import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AlumnosService } from '../services/alumnos.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css']
})
export class SidebarAdminComponent {
  currentUsuario: any;
  usuario: any;
  email: string;
  constructor(private renderer: Renderer2, private elementRef: ElementRef, private alu:AlumnosService,
    private auth:AuthService) {}
  ngOnInit(): void {
     
    const toggleSidebarBtn = document.querySelector('.toggle-sidebar-btn');
    if (toggleSidebarBtn) {
      toggleSidebarBtn.addEventListener('click', () => {
        const body = document.querySelector('body');
        if (body) {
          body.classList.toggle('toggle-sidebar');
        }
      });
    }

    this.email = localStorage.getItem('email');

    this.alu.getalumno(this.email).subscribe(usuario => {
      this.usuario = usuario;
    });
  }

  cerrar(){
    localStorage.setItem('email', "");
    localStorage.setItem('rolx', "");
    this.auth.logout();
  }

}

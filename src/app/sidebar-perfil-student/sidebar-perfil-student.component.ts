import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlumnosService } from '../services/alumnos.service';

@Component({
  selector: 'app-sidebar-perfil-student',
  templateUrl: './sidebar-perfil-student.component.html',
  styleUrls: ['./sidebar-perfil-student.component.css']
})
export class SidebarPerfilStudentComponent {
  constructor(private renderer: Renderer2, private elementRef: ElementRef, private alu:AlumnosService,
    private auth:AuthService) {}
  ngOnInit(){
    const toggleSidebarBtn = document.querySelector('.toggle-sidebar-btn');
    if (toggleSidebarBtn) {
      toggleSidebarBtn.addEventListener('click', () => {
        const body = document.querySelector('body');
        if (body) {
          body.classList.toggle('toggle-sidebar');
        }
      });
    }

  }
  cerrar(){
    localStorage.setItem('email', "");
    localStorage.setItem('rolx', "");
    this.auth.logout();
  }
}

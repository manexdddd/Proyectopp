import { Component } from '@angular/core';
import { AlumnosService } from '../services/alumnos.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-perfil-student',
  templateUrl: './perfil-student.component.html',
  styleUrls: ['./perfil-student.component.css']
})
export class PerfilStudentComponent {
   /* constructor(private renderer: Renderer2, private elementRef: ElementRef, private alu:AlumnosService,
      private auth:AuthService) {}
    isSearchBarVisible: boolean = false;
    currentUsuario: any;
    usuario: any;
    email: string;
  
    
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
  
      const searchBarToggle = this.elementRef.nativeElement.querySelector('.search-bar-toggle');
      const searchBar = this.elementRef.nativeElement.querySelector('.search-bar');
  
      if (searchBarToggle) {
        this.renderer.listen(searchBarToggle, 'click', () => {
          this.renderer.addClass(searchBar, 'search-bar-show');
        });
      }
  
      this.email = localStorage.getItem('email');
  
      this.alu.getalumno(this.email).subscribe(usuario => {
        this.usuario = usuario;
        console.log(usuario)
      });
    }
  
    cerrar(){
      localStorage.setItem('email', "");
      localStorage.setItem('rolx', "");
      this.auth.logout();
    }*/
}

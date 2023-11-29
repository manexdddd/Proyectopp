import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AdminService } from '../services/admin.service';
import { RootService } from '../services/root.service';

@Component({
  selector: 'app-sidebar-tutor',
  templateUrl: './sidebar-tutor.component.html',
  styleUrls: ['./sidebar-tutor.component.css']
})
export class SidebarTutorComponent {

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private ro:RootService,
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

    this.email = localStorage.getItem('email');
    this.ro.getroot(this.email).subscribe(usuario => {
      this.usuario = usuario;
      console.log(usuario)
    });
  }

  cerrar(){
    localStorage.setItem('email', "");
    localStorage.setItem('rolx', "");
    this.auth.logout();
  }
}

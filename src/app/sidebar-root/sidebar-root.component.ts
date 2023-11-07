import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-sidebar-root',
  templateUrl: './sidebar-root.component.html',
  styleUrls: ['./sidebar-root.component.css']
})
export class SidebarRootComponent {
  constructor(private renderer: Renderer2, private elementRef: ElementRef, private ad:AdminService,
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
    this.ad.getadmin(this.email).subscribe(usuario => {
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

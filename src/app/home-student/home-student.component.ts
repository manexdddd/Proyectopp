
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlumnosService } from '../services/alumnos.service';
@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css']
})
export class HomeStudentComponent {
  currentUsuario: any;
  usuario: any;
  email: string;
  constructor(private renderer: Renderer2, private elementRef: ElementRef, private alu:AlumnosService,
    private auth:AuthService) {}
  ngOnInit() {
    this.email = localStorage.getItem('email');

    this.alu.getalumno(this.email).subscribe(usuario => {
      this.usuario = usuario;
      
    });
      
   
    
  }
 
  
}











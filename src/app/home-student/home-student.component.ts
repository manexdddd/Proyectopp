
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
<<<<<<< HEAD


=======
import { AuthService } from '../services/auth.service';
<<<<<<< HEAD
import { AlumnosService } from '../services/alumnos.service';
=======
>>>>>>> 99d9485c995e3a0a3a25e53dee2f24354cbbcf60
>>>>>>> 3e1e3ce266e66ba296d5ca5b6661b4ef3d8379bb
@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css']
})
<<<<<<< HEAD
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
=======
export class HomeStudentComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.startCarousel();
  }
  startCarousel() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;
  
<<<<<<< HEAD
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }
  
    function updateCarousel() {
        const offset = -currentIndex * 100;
        
    }
  
    setInterval(nextSlide, 3000); // Cambia de diapositiva cada 3 segundos (ajusta el tiempo según tus necesidades)
  }

=======
>>>>>>> 3e1e3ce266e66ba296d5ca5b6661b4ef3d8379bb
 
>>>>>>> 99d9485c995e3a0a3a25e53dee2f24354cbbcf60
  
}











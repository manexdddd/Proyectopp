
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlumnosService } from '../services/alumnos.service';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css']
})

export class HomeStudentComponent implements OnInit {
  currentUsuario: any;
  usuario: any;
  email: string;
  constructor(private renderer: Renderer2, private elementRef: ElementRef, private alu:AlumnosService,
    private auth:AuthService) {}

  ngOnInit(): void {
    this.startCarousel();
    this.email = localStorage.getItem('email');

    this.alu.getalumno(this.email).subscribe(usuario => {
      this.usuario = usuario;
    });
  }
  startCarousel() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;
  
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }
  
    function updateCarousel() {
        const offset = -currentIndex * 100;
        
    }
  
    setInterval(nextSlide, 3000); // Cambia de diapositiva cada 3 segundos (ajusta el tiempo según tus necesidades)
  }

 
  
}












import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
<<<<<<< HEAD


=======
import { AuthService } from '../services/auth.service';
>>>>>>> 99d9485c995e3a0a3a25e53dee2f24354cbbcf60
@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css']
})
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
 
>>>>>>> 99d9485c995e3a0a3a25e53dee2f24354cbbcf60
  
}











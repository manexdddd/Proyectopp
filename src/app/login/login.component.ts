import { Component, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('up', { static: true }) contentPage: ElementRef;
  @ViewChild('password') passwordField: ElementRef;
  @ViewChild('face') face: ElementRef;
  @ViewChild('ball') ball: ElementRef;
  @ViewChild('submit') submit: ElementRef;
  @ViewChild('eyes') eyes: ElementRef;

  renderer: any;
  constructor(private auth :AuthService, private afs: AngularFirestore,
     private router: Router,private  storage: AngularFireStorage,private  fb: FormBuilder){
   
  }
  loginForm! : FormGroup;
  progreso: boolean;
  subscription: Subscription;

  usuario ={
    email: '',
    psw:'',
    
   }

  loging(){
      
   
    this.auth.loginGoogle()
   .then(() => {
     // usuario inicio de forma correcta
     console.log("Usuario Inicio Sesion");
     
   })
   .catch(error => {
     // manejo de errores
     console.error("error de", error);
     localStorage.setItem('rolx', "");
   });
  }

  login(){
    
    localStorage.clear();
const {email,psw} = this.usuario


this.auth.login(email,psw) 
// El usuario ha iniciado sesión con éxito

/* this.auth.getUserRole(this.usuario.email).subscribe(user => {
 if (this.usuario.rol=== 'psicologa') {
   this.isAdmin = true;
 } else if (this.usuario.rol === 'alumno') {
   this.isEditor = true;
 }
});*/
//alert("Inicio correcto")
//this.router.navigate(["/signup"]);



}

  ngOnInit(){
    this.subscription = this.auth.currentprogreso.subscribe(value => {
      this.progreso = value;
    });
  }
  showUp() {
    this.contentPage.nativeElement.scrollIntoView();
  }
  ngAfterViewInit() {
    document.addEventListener("mousemove", event => this.handleMouseMove(event));
    this.passwordField.nativeElement.addEventListener('focus', event => this.handleFocusPassword(event));
    this.passwordField.nativeElement.addEventListener('focusout', event => this.handleFocusOutPassword(event));
    this.submit.nativeElement.addEventListener("mouseover", event => this.ball.nativeElement.classList.toggle('look_at'));
    this.submit.nativeElement.addEventListener("mouseout", event => this.ball.nativeElement.classList.toggle('look_at'));
    }
    handleMouseMove(event) {
      if (!this.passwordField.nativeElement.matches(":focus") && !this.passwordField.nativeElement.matches(":user-invalid")) {
          const eyes = this.eyes.nativeElement.getElementsByClassName('eye');
          for (let eye of eyes) {
              const x = eye.getBoundingClientRect().left + 10;
              const y = eye.getBoundingClientRect().top + 10;
              const rad = Math.atan2(event.pageX - x, event.pageY - y);
              const rot = (rad * (180 / Math.PI) * -1) + 180;
              eye.style.transform = `rotate(${rot}deg)`;
          }
      }
    }
   
    handleFocusPassword(event) {
      this.face.nativeElement.style.transform = 'translateX(30px)';
      const eyes = this.eyes.nativeElement.getElementsByClassName('eye');
      for (let eye of eyes) {
          eye.style.transform = `rotate(100deg)`;
      }
    }
   
    handleFocusOutPassword(event) {
      this.face.nativeElement.style.transform = 'translateX(0)';
      if(event.target.checkValidity()) {
          this.ball.nativeElement.classList.toggle('sad');
      } else {
          this.ball.nativeElement.classList.toggle('sad');
          const eyes = this.eyes.nativeElement.getElementsByClassName('eye');
          for (let eye of eyes) {
              eye.style.transform = `rotate(215deg)`;
          }
      }
    }
 }


      


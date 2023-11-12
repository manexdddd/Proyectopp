import { Component, ElementRef, ViewChild } from '@angular/core';
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
export class LoginComponent {
  @ViewChild('up', { static: true }) contentPage: ElementRef;
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
    this.showUp();
  }
  showUp() {
    this.contentPage.nativeElement.scrollIntoView();
  }




  

}

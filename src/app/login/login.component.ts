import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth :AuthService, private afs: AngularFirestore,
     private router: Router,private  storage: AngularFireStorage){
   
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
   });
  }

}

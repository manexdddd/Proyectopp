import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase  from "firebase/compat/app";
import { Router } from '@angular/router';

import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario:any
  role:any
  private progreso = new BehaviorSubject<boolean>(false);
    currentprogreso = this.progreso.asObservable();
    constructor(private afauth:AngularFireAuth,private router: Router,private  storage: AngularFireStorage) {
      
     }

     changeprogreso(value: boolean) {
      this.progreso.next(value);
    }

  
    //inicio de sesion google
    async loginGoogle(){
      try{
         const resultado =await this.afauth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
           alert("Inicio Correcto")
           this.router.navigate(['/home-student']);
         
      }catch(err){
       console.log("Error  en login con google",err)
       alert("Inicio inCorrecto")
       return null;
      }


      

}

//registro alumno (autenticacion)
async registro(email:string,psw :string){
  try{
       return await this.afauth.createUserWithEmailAndPassword( email,psw);

  }catch(err){
  console.log("Error en",err)
   return null;
  }


  

}

    

   


    



}

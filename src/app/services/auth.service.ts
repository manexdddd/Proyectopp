import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase  from "firebase/compat/app";
import { Router } from '@angular/router';

import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject, finalize } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario:any
  role:any
  private progreso = new BehaviorSubject<boolean>(false);
    currentprogreso = this.progreso.asObservable();
    constructor(private afauth:AngularFireAuth,private afs: AngularFirestore,private router: Router,private  storage: AngularFireStorage,
      ) {
      
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

    

crearDocumento(alumnoid: string, data: any) {
  //referencia del documento 
  const documentRef = this.afs.collection('alumnos').doc(alumnoid);


  //ingresa los datos al documento
  return documentRef.set(data)
    .then(() => {
      console.log('Documento creado con éxito');
      this.router.navigate(['/login']);
    })
    .catch(error => {
      console.error('Error al crear el documento:', error);
    });

}

//cerrar sesion
async logout() {
  localStorage.setItem('email', "");
  localStorage.setItem('rolx', "");
    await this.afauth.signOut();
    
    this.router.navigate(['/login']);
 

}
    

getusuario() {
  return this.afauth.authState;
}

}

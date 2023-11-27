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
         localStorage.setItem('rolx', "alumno");
         alert("Inicio Correcto")
           this.router.navigate(['/home-student']);
         
      }catch(err){
       console.log("Error  en login con google",err)
       alert("Inicio inCorrecto")
       return null;
      }


      

}

async login(email:string,psw :string){
  try{
    localStorage.clear();
   this.changeprogreso(true)
    await this.afauth.signInWithEmailAndPassword(email,psw);
    localStorage.setItem('email', email);
    alert("incio correcto")
  const ad = await this.afs.collection('admin').doc(email).get().toPromise();
const alu = await this.afs.collection('alumnos').doc(email).get().toPromise();
//const tut = await this.afs.collection('tutor').doc(email).get().toPromise();
this.usuario = {
  ...(ad.data()as any),
  ...(alu.data()as any),
  //...(tut.data()as any)
};
localStorage.setItem('rolx', this.usuario.rol);
console.log(localStorage.getItem("rolx")+localStorage.getItem("email"));

 switch(localStorage.getItem("rolx")){
case 'admin':
this.router.navigate(['/home-admin']);
this.changeprogreso(false)
break;
case 'alumno':
this.router.navigate(['/home-student']);
this.changeprogreso(false)
break;
case 'root':
this.router.navigate(['/home-root']);
this.changeprogreso(false)
break;
/*case 'tutor':
this.router.navigate(['/home-tutor']);
this.changeprogreso(false)
break;*/
default:
this.router.navigate(['/login']);
this.changeprogreso(false)
 }/*
    if (localStorage.getItem("rolx")=== 'admin') {
      this.router.navigate(['/home-admin']);
    }  if (localStorage.getItem("rolx") === 'alumno') {
      this.router.navigate(['/home-alumno']);
    }  else if (localStorage.getItem("rolx") === 'tutor') {
      this.router.navigate(['/home-tutor']);
    } else if (localStorage.getItem("rolx") === 'root') {
      this.router.navigate(['/home-root']);
    }else {
      this.router.navigate(['/login']);
    }*/
    
   
    }catch(err){
   alert("incio incorrecto")
  
   localStorage.clear();
   this.changeprogreso(false)
   return null;
  }


  

}


//registro alumno (autenticacion)
async registro(email:string,psw :string){
  try{
    this.changeprogreso(true)
       return await this.afauth.createUserWithEmailAndPassword( email,psw);

  }catch(err){
  console.log("Error en",err)
   return null;
  }


  

}

async sendPasswordResetEmail(email: string) {
  

 return await this.afauth.sendPasswordResetEmail(email);
  
 
 
}

crearDocumento(alumnoid: string, data: any) {
  //referencia del documento 
  const documentRef = this.afs.collection('alumnos').doc(alumnoid);

  this.changeprogreso(false)
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
    this.changeprogreso(false)
    this.router.navigate(['/login']);
 

}
    

getusuario() {
  return this.afauth.authState;
}

}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RootService {
  constructor(private afs: AngularFirestore,private router: Router,private messaging: AngularFireMessaging) { }


 

  
  getroot(adminid: string) {
    return this.afs.collection('admin').doc(adminid).valueChanges();
  }
  getAvisos():  Observable<any[]> {
    return this.afs.collection('avisos').valueChanges();
   }
  crearDocumento( data: any) {
    //referencia del documento 
    const collectionRef = this.afs.collection('avisos');
  
   
    //ingresa los datos al documento
    return collectionRef.add(data)
      .then(docref => {
        alert("Se creo el aviso")
        this.router.navigate(['/avisos-root']);
      })
      .catch(error => {
        alert("NO Se creo el aviso")
      });
  
  }
  
  crearPsyco(usuarioid: string, data: any) {
    //referencia del documento 
    const documentRef = this.afs.collection('admin').doc(usuarioid);
  
    
    //ingresa los datos al documento
    return documentRef.set(data)
      .then(() => {
        alert('Documento creado con éxito');
        
      })
      .catch(error => {
        alert('Error al crear el documento:');
      });
  
  }

  crearTuto(usuarioid: string, data: any) {
    //referencia del documento 
    const documentRef = this.afs.collection('admin').doc(usuarioid);
  
    
    //ingresa los datos al documento
    return documentRef.set(data)
      .then(() => {
        alert('Documento creado con éxito');
        
      })
      .catch(error => {
        alert('Error al crear el documento:');
      });
  
  }
    
  
  }


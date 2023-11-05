import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private afs: AngularFirestore) { }

  getalumno(alumid: string) {
    return this.afs.collection('alumnos').doc(alumid).valueChanges();
  }
}

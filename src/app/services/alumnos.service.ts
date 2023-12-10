import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { entrevista } from './entrevista.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private entrevistaDB: AngularFireList<entrevista>

  constructor(private afs: AngularFirestore, private db: AngularFireDatabase) { 
    this.entrevistaDB = this.db.list('/entrevista', (ref) =>
    ref.orderByChild('fecha')
    );
  }

  getalumno(alumid: string) {
    return this.afs.collection('alumnos').doc(alumid).valueChanges();
  }

  getAll(alumnos: String[]): Observable<any> {
    console.log(alumnos);  // Log the 'alumnos' array
    return this.afs.collection('alumnos', ref => ref.where('email', 'in', alumnos)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        console.log(data);  // Log the data of each matched document
        return { id, data };
      }))
    );
  }
  
 

  getentre(collectionName: string): Observable<any[]> {
    return this.afs.collection('alumnos').valueChanges({ idField: 'entrevista' });
  }
}

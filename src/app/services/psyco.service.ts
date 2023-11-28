import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PsycoService {
  private dbPath = '/admin';

  constructor(private db: AngularFirestore) { }
 
  getAll(): Observable<any> {
    return this.db.collection(this.dbPath, ref => ref.where('rol', '==', 'admin')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
   }
 
  create(data: any): Promise<any> {
  return this.db.collection(this.dbPath).add(data);
  }
 
  update(key: string, data: any): Promise<any> {
  return this.db.collection(this.dbPath).doc(key).update(data);
  }
 
  delete(key: string): Promise<any> {
  return this.db.collection(this.dbPath).doc(key).delete();
  }
 
  getpsyco(id: string) {
    return this.db.collection(this.dbPath).doc(id).valueChanges();
  }


 
}

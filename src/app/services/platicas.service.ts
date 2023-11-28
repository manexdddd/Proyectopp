import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaticasService {

  private dbPath = '/platicas';

  constructor(private db: AngularFirestore,private router:Router) { }
 
  getAll(): Observable<any> {
    return this.db.collection(this.dbPath).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id,data};
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
 
  getaviso(id: string) {
    return this.db.collection(this.dbPath).doc(id).valueChanges();
  }


  crearDocumento( data: any) {
    //referencia del documento 
    const collectionRef = this.db.collection('platicas');
  
   
    //ingresa los datos al documento
    return collectionRef.add(data)
      .then(docref => {
        alert("Se creo la platica")
        this.router.navigate(['/platicas-root']);
      })
      .catch(error => {
        alert("NO Se creo la platica")
      });
  
  }

  getplatica(id: string) {
    return this.db.collection(this.dbPath).doc(id).valueChanges();
  }
}

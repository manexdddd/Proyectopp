import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class RootService {
  constructor(private afs: AngularFirestore) { }
  getroot(adminid: string) {
    return this.afs.collection('admin').doc(adminid).valueChanges();
  }
}

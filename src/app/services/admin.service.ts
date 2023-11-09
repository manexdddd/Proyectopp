import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private afs: AngularFirestore) { }

  getadmin(adminid: string) {
    return this.afs.collection('admin').doc(adminid).valueChanges();
  }
}

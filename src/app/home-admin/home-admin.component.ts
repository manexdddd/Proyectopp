import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RootService } from '../services/root.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AvisosService } from '../services/avisos.service';
import { TutorService } from '../services/tutor.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {
  count5: number;
  avises:any[];
  tutores:any[];
  constructor(private renderer: Renderer2,private av:AvisosService,private ab:TutorService, private elementRef: ElementRef, private ro:RootService,
    private auth:AuthService, private afs: AngularFirestore) {

      this.av.getAll().subscribe(data => {
        this.avises = this.RecentAvisos(data);
        console.log(this.avises);
       });
  

       
      this.ab.getAll().subscribe(data => {
        this.tutores = this.RecentAvisos(data);
        
       });

    }
    usuario: any;
    email: string;

count:any;
count2:any; 
count3:any;
count4:any;
  ngOnInit(): void {


    this.email = localStorage.getItem('email');
    this.ro.getroot(this.email).subscribe(usuario => {
      this.usuario = usuario;
      
    });


    const referencia1 = this.afs.collection('platicas').snapshotChanges();
    referencia1.subscribe(data => {
       this.count = data.length;
      
    });

    const referencia3 = this.afs.collection('avisos').snapshotChanges();
    referencia3.subscribe(data => {
       this.count3 = data.length;
    });


    const referencias2 = this.afs.collection('alumnos').snapshotChanges();
    referencias2.subscribe(data => {
       this.count2 = data.length;
      
    });

    const referencia4 = this.afs.collection('admin', ref => ref.where('rol', '==', 'tutor')).snapshotChanges();
    referencia4.subscribe(data => {
       this.count4 = data.length;
    });

    const referencia5 = this.afs.collection('admin', ref => ref.where('rol', '==', 'admin')).snapshotChanges();
    referencia5.subscribe(data => {
       this.count5 = data.length;
    });

  }

  cerrar(){
    localStorage.setItem('email', "");
    localStorage.setItem('rolx', "");
    this.auth.logout();
  }

  RecentAvisos(avisos) {
    // Sort the avisos array in descending order based on the date
    const sortedAvisos = avisos.sort((a, b) => new Date(b.data.fecha).getTime() - new Date(a.data.fecha).getTime());
   
    // Use the slice method to get the first three elements of the sorted array
    const threeMostRecentAvisos = sortedAvisos.slice(0, 6);
   
    return threeMostRecentAvisos;
   }
  
}
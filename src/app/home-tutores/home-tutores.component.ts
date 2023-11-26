import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RootService } from '../services/root.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home-tutores',
  templateUrl: './home-tutores.component.html',
  styleUrls: ['./home-tutores.component.css']
})
export class HomeTutoresComponent {
  constructor(private renderer: Renderer2, private elementRef: ElementRef, private ro:RootService,
    private auth:AuthService, private afs: AngularFirestore) {}
    usuario: any;
    email: string;

count:any;
count2:any; 
  ngOnInit(): void {


    this.email = localStorage.getItem('email');
    this.ro.getroot(this.email).subscribe(usuario => {
      this.usuario = usuario;
      
    });


    const referencia1 = this.afs.collection('platicas').snapshotChanges();
    referencia1.subscribe(data => {
       this.count = data.length;
      
    });

    const referencias2 = this.afs.collection('alumnos').snapshotChanges();
    referencias2.subscribe(data => {
       this.count2 = data.length;
      
    });
  }

  cerrar(){
    localStorage.setItem('email', "");
    localStorage.setItem('rolx', "");
    this.auth.logout();
  }
}



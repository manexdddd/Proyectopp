import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Subscription, finalize } from 'rxjs';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registroForm! : FormGroup;
  progreso: boolean;
  subscription: Subscription;
  constructor(private  fb: FormBuilder,private auth :AuthService,private afs: AngularFirestore,private  storage: AngularFireStorage) {}
  usuario ={
    email: '',
    psw:'',
    nombre:'',
    materno:'',
    paterno:'',
    rol:'alumno',
    foto:'',
   control:'',
   carrera:'Elige tu Carrera',
   grupo:'Elige tu Carrera',
   }
   
  ngOnInit(): void{
    
    this.registroForm = this.initForm();

    this.subscription = this.auth.currentprogreso.subscribe(value => {
      this.progreso = value;
    });
  }

  onSubmit(): void {
    const {email,psw,nombre,materno,paterno,rol} = this.usuario
        this.auth.registro(email,psw)
        .then(() => {
          // El usuario ha iniciado sesión con éxito
          this.auth.crearDocumento(email,this.usuario)
          alert("Registro correcto")
          
        })
        .catch(error => {
          // Manejo de errores de inicio de sesión
          alert("Inicio incorrecto")
        })

        
  }
  initForm(): FormGroup{
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      name: ['', [Validators.required]],
      surnameM: ['', [Validators.required]],
      surnameP: ['', [Validators.required]],
      numberC: ['', [Validators.required]],
      career: ['', [Validators.required]],
      grupo: ['', [Validators.required]],
    },{validators: this.confirmPasswordValidator});
  }
  confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password && confirmPassword && password.value == confirmPassword.value ? null : { mismatch: true };
  }
  //Funcion para convertir los datos del email a minusculas
  lowecase(){
    const emailControl = this.registroForm.get('email');
    emailControl?.setValue(emailControl.value.toLowerCase(), {emitEvent: false});
  }


  uploadImage(event) {
    const file = event.target.files[0];
    const filePath = `usuarios/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          this.usuario.foto = url;
        });
      })
    ).subscribe();
  }
}



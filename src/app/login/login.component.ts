import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
/*
  registroForm! : FormGroup;

  constructor(private  fb: FormBuilder) {}

  ngOnInit(): void{
    this.registroForm = this.initForm();
  }

  onSubmit(): void {
    console.log('Form ->', this.registroForm.value);
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
  }*/
}

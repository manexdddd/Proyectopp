import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
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
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-encuestas-public',
  templateUrl: './encuestas-public.component.html',
  styleUrls: ['./encuestas-public.component.css']
})
export class EncuestasPublicComponent {
  encuestaForm! : FormGroup;

enviado = false
  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void{
    this.encuestaForm = this.initForm();
  }

  onSubmit(): void {
    this.enviado = true
    if(!this.encuestaForm.valid) {
      alert('Please fill all the required fields to create a super hero!')
     return
    }
  console.log('Form ->', this.encuestaForm.value);
  }

  initForm(): FormGroup{
    return this.fb.group({
      name: ['', [Validators.required]],
      numberC: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      nomTu: ['', [Validators.required]],
      grupo: ['', [Validators.required]],
      carrera: ['', [Validators.required]],
      platica: ['', [Validators.required]],
      nomPon: ['', [Validators.required]],
      opcion1: ['', [Validators.required]],
      opcion2: ['', [Validators.required]],
      opcion3: ['', [Validators.required]],
      opcion4: ['', [Validators.required]],
      comentario0: ['', [Validators.required]],
      opcion5: ['', [Validators.required]],
      comentario1: ['', [Validators.required]]
    })
  }


  
}
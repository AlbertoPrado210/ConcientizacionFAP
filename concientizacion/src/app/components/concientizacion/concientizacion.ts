import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Importamos el Router

@Component({
  selector: 'app-concientizacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './concientizacion.html',
  styleUrl: './concientizacion.css'
})
export class ConcientizacionComponent {

  constructor(private router: Router) {} // Inyectamos el Router en el constructor

  irAInicio() {
    this.router.navigate(['/']);

    // OPCIONAL: Podrías redirigirlos a la web oficial de la institución
    // window.location.href = 'https://www.gob.pe/fap';
  }
}

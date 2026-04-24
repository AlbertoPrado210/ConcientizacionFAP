import { Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario';
import { ConcientizacionComponent } from './components/concientizacion/concientizacion';

export const routes: Routes = [
  { path: '', component: FormularioComponent },
  { path: 'seguridad', component: ConcientizacionComponent },
  { path: '**', redirectTo: '' }
];

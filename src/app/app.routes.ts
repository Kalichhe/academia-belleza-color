import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { MatriculasComponent } from './components/matriculas/matriculas.component';
import { privateGuard, publicGuard } from './core/auth.guard';

export const routes: Routes = [
  {path:'inicio', component:HomeComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'cursos', component:CursosComponent},
  {path:'matriculas', component:MatriculasComponent},
  {
    canActivateChild: [publicGuard()],
    path: 'auth',
    loadChildren: () => import('./auth/features/auth.routes'),
  },
  {
    canActivateChild: [privateGuard()],
    path: 'inscripcion',
    loadChildren: () => import('./Inscripcion/features/inscipcion.routes')
  },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redirección inicial
  { path: '**', redirectTo: '/inicio' },// Manejo de rutas inválidas


];

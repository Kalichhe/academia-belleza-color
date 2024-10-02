import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { MatriculasComponent } from './components/matriculas/matriculas.component';

export const routes: Routes = [
  {path:'inicio', component:HomeComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'cursos', component:CursosComponent},
  {path:'matriculas', component:MatriculasComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redirección inicial
  { path: '**', redirectTo: '/inicio' } // Manejo de rutas inválidas

];

import { Routes } from "@angular/router";

export default [
  {
    path: '',
    loadComponent: () => import('./inscripcion/inscripcion.component'),
  },
  {
    path: 'new',
    loadComponent: () => import('./inscripcion-form/inscripcion-form.component'),
  },


] as Routes

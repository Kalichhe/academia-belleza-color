import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements AfterViewInit{
  ngAfterViewInit() {
    const cursos = document.querySelectorAll('.curso__imagen');

    // Añadir la clase 'animate' a cada elemento .curso después de que la página haya cargado
    cursos.forEach(curso => {
      curso.classList.add('animate');
    });
  }
}

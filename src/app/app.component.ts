import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxSonnerToaster } from 'ngx-sonner'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,NavigatorComponent,CommonModule,NgxSonnerToaster],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public router: Router) {}

  isAuthOrInscripcionRoute(): boolean {
    return this.router.url.startsWith('/auth') || this.router.url.startsWith('/inscripcion');
  }
}

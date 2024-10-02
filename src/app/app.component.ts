import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavigatorComponent } from './components/navigator/navigator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,NavigatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

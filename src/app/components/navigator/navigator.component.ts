import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigator',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.css'
})
export class NavigatorComponent {

}

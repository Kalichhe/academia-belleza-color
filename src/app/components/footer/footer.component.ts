import { Component,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements AfterViewInit {
  ngAfterViewInit() {
    const footer = document.querySelector('.principal-footer');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          footer?.classList.add('animate');
          observer.unobserve(footer!); // Deja de observar una vez que se ha animado
        }
      });
    });

    observer.observe(footer!);
  }
}

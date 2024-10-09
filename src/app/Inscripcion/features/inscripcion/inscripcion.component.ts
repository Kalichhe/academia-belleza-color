import { authState } from '@angular/fire/auth';
import { Component, inject } from '@angular/core';
import { AuthStateService } from '../../../shared/data-access/auth-state.service';
import { Router, RouterLink } from '@angular/router';
import { TableComponent } from '../../ui/table/table.component';

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [TableComponent,RouterLink],
  templateUrl: './inscripcion.component.html',
  styleUrl: './inscripcion.component.css'
})
export default class InscripcionComponent {
  private _aurhState = inject(AuthStateService);
  private _router = inject(Router);

  async logOut(){
    await this._aurhState.logOut();
    this._router.navigateByUrl('/inicio')
  };
}

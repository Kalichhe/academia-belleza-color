import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskCreate, TaskService } from '../../data-access/task.service';
import { toast } from 'ngx-sonner';
import { Router } from '@angular/router';
import { isRequired, isRequiredForm } from '../../../auth/utils/validators';

@Component({
  selector: 'app-inscripcion-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inscripcion-form.component.html',
  styleUrl: './inscripcion-form.component.css'
})
export default class InscripcionFormComponent {
  private _formBuilder = inject(FormBuilder);
  private _taskService = inject(TaskService);
  private _router = inject(Router);

  isRequiredForm(field:'name'|'lastName'| 'phone'|'municipio'|'curso'){
    return isRequiredForm(field, this.form);
  }

  loading = signal(false);

  form = this._formBuilder.group({
    name: this._formBuilder.control('', Validators.required),
    lastName: this._formBuilder.control('', Validators.required),
    phone: this._formBuilder.control('', Validators.required),
    municipio: this._formBuilder.control('', Validators.required),
    curso: this._formBuilder.control('', Validators.required),

  });

  async submit(){
    if (this.form.invalid) return;
    try {
      this.loading.set(true);
      const { name, lastName, phone, municipio, curso} = this.form.value;
      const task: TaskCreate = {
        name: name|| '',
        lastName: lastName|| '',
        phone: phone||'',
        municipio: municipio||'',
        curso: curso||'',
      };
      await this._taskService.create(task);
      toast.success('Prematriculado Correctamente')
      this._router.navigateByUrl('/inscripcion')
    } catch(error){
      toast.success('Ocurrio un problema')
    } finally{
      this.loading.set(false);
    }
  }
}

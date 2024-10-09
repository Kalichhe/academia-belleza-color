import { isRequired, hasEmailError } from '../../utils/validators';
import { Component, inject, ViewEncapsulation  } from '@angular/core';
import {FormBuilder, FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../../data-access/auth.service';
import { toast } from 'ngx-sonner';
import { Router, RouterLink } from '@angular/router';
import { GoogleButtonComponent } from '../../ui/google-button/google-button.component';


interface FormSignIn{
  email:FormControl<string|null>;
  password:FormControl<string|null>;
}

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, GoogleButtonComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  encapsulation: ViewEncapsulation.None
})
export default class SignInComponent {
  private _formBuilder = inject(NonNullableFormBuilder);
  private _authService = inject(AuthService);
  private _router = inject(Router);

  isRequired(field:'email'|'password'){
    return isRequired(field, this.form);
  }

  hasEmailError() {
    return hasEmailError(this.form)
  }


  form = this._formBuilder.group<FormSignIn>({
    email: this._formBuilder.control('',[Validators.required,Validators.email]),
    password: this._formBuilder.control('',[Validators.required])
  });

  async submit(){
    if(this.form.invalid) return;
    try {
      const {email,password}=this.form.value;

      if(!email || !password) return;

      await this._authService.signIn({email,password});
      toast.success('Bienvenido');
      this._router.navigateByUrl('/inscripcion')
    } catch(error){
      toast.error("Ocurrio un error")
    };
  }

  async submitWithGoogle(){
    try{
      await this._authService.signInWithGoogle()
      toast.success('Usuario creado correctamente');
      this._router.navigateByUrl('/inscripcion')
    } catch(error){
      toast.error("Ocurrio un error")
    }
  }
}


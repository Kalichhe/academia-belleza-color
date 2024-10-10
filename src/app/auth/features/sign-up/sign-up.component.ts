  import { initializeApp } from '@angular/fire/app';
import { isRequired,hasEmailError } from '../../utils/validators';
import { Component, inject, ViewEncapsulation  } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, NonNullableFormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms'
import { AuthService } from '../../data-access/auth.service';
import { toast } from 'ngx-sonner';
import { Router, RouterLink } from '@angular/router';
import { GoogleButtonComponent } from '../../ui/google-button/google-button.component';
import { CommonModule } from '@angular/common';


interface FormSignUp{
  email:FormControl<string|null>;
  password:FormControl<string|null>;
  confirmPassword: FormControl<string | null>;
  // fullName: FormControl<string | null>;
  // phone: FormControl<string | null>;
}


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink, GoogleButtonComponent, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  encapsulation: ViewEncapsulation.None
})
export default class SignUpComponent {
  private _formBuilder = inject(NonNullableFormBuilder);
  private _authService = inject(AuthService);
  private _router = inject(Router);

  isRequired(field:'fullName'| 'email'|'phone'|'password'){
    return isRequired(field, this.form);
  }

  hasEmailError(){
    return hasEmailError(this.form);
  }

  form = this._formBuilder.group<FormSignUp>({
    email: this._formBuilder.control('',[Validators.required,Validators.email]),
    password: this._formBuilder.control('',[Validators.required]),
    confirmPassword: this._formBuilder.control('', [Validators.required])
  }, { validators: this.passwordsMatchValidator });


  passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  async submit(){
    if(this.form.invalid) return;
    try {
      const {email,password}=this.form.value;

      if(!email || !password) return;

      await this._authService.signUp({email,password});
      toast.success('Usuario creado correctamente');
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


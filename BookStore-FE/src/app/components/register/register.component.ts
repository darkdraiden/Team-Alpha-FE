
import { passwordMatchValidator } from './shared/password-Match';

import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  fullNamePlaceholder = 'Enter your Name';
  emailPlaceholder = 'Enter your Email';
  passwordPlaceholder = 'Enter Password';
  confirmPasswordPlaceholder = 'Confirm Password';

  passwordConditions: string[] = [];

  registerForm = this.fb.group({
    fullName: ['', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]+ [a-zA-Z]+$/),
    ]],
    email: ['', [
      Validators.required,
      Validators.email,
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}|\[\]\\';:"<>,./?])[\w!@#$%^&*()_+={}|\[\]\\';:"<>,./?]{8,}$/),
    ]],
    confirmPassword: ['', Validators.required]
  },
    {
      validators: passwordMatchValidator
    }
  )

  constructor(private fb: FormBuilder) { }

  get fullName() {
    return this.registerForm.controls['fullName'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }

  clearPlaceholder(controlName: string): void {
    if (controlName === 'fullName') {
      this.fullNamePlaceholder = '';
    } else if (controlName === 'email') {
      this.emailPlaceholder = '';
    } else if (controlName === 'password') {
      this.passwordPlaceholder = '';
    }
     else if (controlName === 'confirmPassword') {
      this.confirmPasswordPlaceholder = '';
    }
  }

  registerUser(){
    console.warn(this.registerForm.value)
  }
  
  
}

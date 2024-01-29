
import { passwordMatchValidator } from './shared/password-Match';

import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  namePlaceholder = 'Enter your Name';
  emailPlaceholder = 'Enter your Email';
  passwordPlaceholder = 'Enter Password';
  confirmPasswordPlaceholder = 'Confirm Password';
  phonePlaceholder = 'Enter your Phone Number';
 

  passwordConditions: string[] = [];

  registerForm = this.fb.group({
    name: ['', [
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
    confirmPassword: ['', Validators.required],
    phone: ['', [
      Validators.required,
      Validators.pattern(/^\d{10}$/),
    ]],
  },
    {
      validators: passwordMatchValidator
    }
  )

  constructor(private fb: FormBuilder,
    private authService : AuthService, 
    private msgService:MessageService,
    private router:Router
    ){}
  //auth servivce form auth service.ts ko add kiya { }

  get fullName() {
    return this.registerForm.controls['name'];
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

  get phoneNumber(){
    return this.registerForm.controls['phone'];
  }
 

  clearPlaceholder(controlName: string): void {
    if (controlName === 'name') {
      this.namePlaceholder = '';
    } else if (controlName === 'email') {
      this.emailPlaceholder = '';
    } else if (controlName === 'password') {
      this.passwordPlaceholder = '';
    }
     else if (controlName === 'confirmPassword') {
      this.confirmPasswordPlaceholder = '';
    }
    else if (controlName==='phone'){
      this.phonePlaceholder='';
    }
  }

  registerUser(){
    console.warn(this.registerForm.value)
  }
  
  submitDetails(){
  console.log(this.registerForm.value)
   const postData = {...this.registerForm.value};
  delete postData.confirmPassword;
  this.authService.registerUser(postData as User).subscribe(
    response => {
      console.log(response);
      this.msgService.add({ severity: 'success', summary: 'Success', detail: 'Register sucess' });
      this.router.navigate(['home'])
    },
    error => {
      console.log(error)
      this.msgService.add({ severity: 'error', summary: 'error', detail: 'wrong' });

    }
  )

 }

 loginVisible: boolean = false;

  showLoginDialog() {
    this.loginVisible = true;
  }

  
}

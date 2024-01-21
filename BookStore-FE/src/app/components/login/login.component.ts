
import { Component } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailPlaceholder = 'Enter your Email';
  passwordPlaceholder='Enter your password';
  loginForm = this.fb.group(
    {
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]//validator.pattern to add extra pattern
    }
  )

  constructor(private fb:FormBuilder){}

  get email(){
    return this.loginForm.controls['email'];
  }

  get password(){
    return this.loginForm.controls['password'];
  }

  clearPlaceholder(controlName: string): void {

    if (controlName === 'email') {
      this.emailPlaceholder = ''; // Optionally clear the placeholder text for email
    } else if (controlName === 'password') {
      this.passwordPlaceholder = ''; // Optionally clear the placeholder text for password
    }
  }
}

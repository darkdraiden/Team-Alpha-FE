
import { Component } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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
}

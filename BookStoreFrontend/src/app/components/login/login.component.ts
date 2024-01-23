
import { Component } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

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
      password:['',Validators.required]
    }
  )

  constructor(private fb:FormBuilder, 
    private authService :AuthService,
    private router:Router,
    private msgService :MessageService
    ){}

  get email(){
    return this.loginForm.controls['email'];
  }

  get password(){
    return this.loginForm.controls['password'];
  }

  clearPlaceholder(controlName: string): void {

    if (controlName === 'email') {
      this.emailPlaceholder = ''; 
    } else if (controlName === 'password') {
      this.passwordPlaceholder = ''; 
    }

   
  }

  LoginUser(){
      const{email,password}=this.loginForm.value;
      this.authService.loginUser(email as string).subscribe(
        response =>{
if(response.length>0 && response[0].password===password){
  sessionStorage.setItem('email',email as string);
  this.router.navigate(['/home']);
}else{
  this.msgService.add({ severity: 'error', summary: 'error', detail: 'wrong password or email' });
}     },

error =>{
  this.msgService.add({ severity: 'error', summary: 'error', detail: 'API error' });
}
      )
  }
}
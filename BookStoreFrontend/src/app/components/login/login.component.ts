
import { Component, Injectable } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User, loginUser } from 'src/app/interfaces/auth';
import { LoginUserServiceService } from 'src/app/login-user-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Injectable({
  providedIn: 'root',
})

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
    private msgService :MessageService,
    private loginUserService: LoginUserServiceService
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
      const currUser={...this.loginForm.value};
      this.authService.loginUser(currUser as loginUser).subscribe(
        response =>{
          // localStorage.setItem('token',respone.token);
          // const tok =localStorage.getItem('token')
          console.log(response);
          if(response.token != null){

            localStorage.setItem('token',response.token);
            const user = response.user;

            this.loginUserService.setUser(user);

          this.router.navigate(['/home']);
          }else{
            this.msgService.add({ severity: 'error', summary: 'error', detail: 'wrong password or email' });
          }     
        },

        error =>{
          console.warn(error)
          this.msgService.add({ severity: 'error', summary: 'error', detail: 'API error' });
        }
      )
  }
}
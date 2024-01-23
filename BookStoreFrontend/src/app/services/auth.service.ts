import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  
  private apiUrl='http://localhost:3000'
  constructor(private http : HttpClient,
    private router :Router ) { }

  registerUser(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users`, user);
  }

  loginUser(email:string): Observable<User[]> {
    this.isLoggedIn=true;
    return this.http.get<User[]>(`${this.apiUrl}/users?email=${email}`);
  }

  LogoutUser(){
    this.isLoggedIn=false;
    sessionStorage.clear();
    this.router.navigate(['home']);
  }
  
}



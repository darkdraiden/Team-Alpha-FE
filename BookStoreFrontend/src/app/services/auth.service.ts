import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, loginUser } from '../interfaces/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Books } from '../interfaces/books';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  isSignup:boolean=false;
  
  private apiUrl='http://localhost:8080/api/v1'
  constructor(private http : HttpClient,
    private router :Router ) { }

  registerUser(user: User): Observable<any> {
    this.isSignup=true;
    return this.http.post<any>(`${this.apiUrl}/user/signup`, user);
  }

  loginUser(user: loginUser): Observable<any> {
    this.isLoggedIn=true;
    console.log(user);
    return this.http.post<any>(`${this.apiUrl}/user/login`,user);
  }

  LogoutUser(){
    this.isLoggedIn=false;
    localStorage.setItem('token',"null");
    this.router.navigate(['home']);
  }
  
  addBook(book: Books): Observable<any> {
    this.isSignup=true;
    return this.http.post<any>(`${this.apiUrl}/user/signup`,book);
  }
}



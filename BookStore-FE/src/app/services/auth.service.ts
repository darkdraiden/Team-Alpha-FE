import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  
  private apiUrl='http://localhost:3000'
  constructor(private http : HttpClient) { }

  registerUser(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users`, user);
  }

  loginUser(email:string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users?email=${email}`);
    this.isAuthenticated = true;
  }

  
}



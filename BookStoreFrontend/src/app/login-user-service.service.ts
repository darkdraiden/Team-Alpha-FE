import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginUserServiceService {
  private currentUser: any; // You can replace 'any' with the actual user model
  constructor() { }
  
  setUser(user: any) {
    this.currentUser = user;
  }

  getUser(): any {
    return this.currentUser;
  }

  clearUser() {
    this.currentUser = null;
  }
}

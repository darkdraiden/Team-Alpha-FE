import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isDropdownOpen: boolean = false; 
  
  constructor(private router :Router,
  public authService :AuthService){}
  
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout(): void {
    this.authService.LogoutUser();
  }

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

  visibleCart: boolean = false;

  showCart() {
      this.visibleCart = true;
  }
 
  visibleOrder:boolean=false;

  showvisibleOrder(){
    this.visibleOrder=true;
  }

  showProfile:boolean=false;
  MyProfile(){
this.showProfile=true;
  }

  log:boolean=false;
  islog(){
this.log=true;
  }

}

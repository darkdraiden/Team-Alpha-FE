import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  isDropdownOpen: boolean = false; 
  isUserAdmin:boolean=false;
  constructor(private router :Router,
  public authService :AuthService){}
  
    ngOnInit(): void {
      const storedUser=localStorage.getItem('user');
      const user=JSON.parse(storedUser ? storedUser:"null");
      
      if(user!="null"){
        if(user.role == "ADMIN") this.isUserAdmin=true;
      }
    }

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

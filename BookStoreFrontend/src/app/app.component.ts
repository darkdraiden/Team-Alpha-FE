import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BookStore-FE';

  constructor(private authService : AuthService){}
  ngOnInit(): void {
    if(localStorage.getItem('token')!=null || localStorage.getItem('token')!="null"){
      this.authService.isLoggedIn=true;
    }
    else{
      this.authService.isLoggedIn=false;
    }
  }
}

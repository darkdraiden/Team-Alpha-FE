import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(private router :Router,
  private authService :AuthService){}
  logOut(){
    sessionStorage.clear();
    this.router.navigate(['login'])
  }
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}

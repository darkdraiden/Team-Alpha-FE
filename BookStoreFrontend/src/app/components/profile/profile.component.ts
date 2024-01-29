import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any; 

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    //  data from the API 
    this.fetchUserData();
  }

  fetchUserData(): void {
    // replace with actual API call from UserService
    this.user = {
      name: 'John Doe',
      phoneNumber: '123-456-7890',
      email: 'john@example.com',
      gender: 'Male',
      birthday: '1990-01-01',
      address: '123 Street, City, Country'
    };
  }

  editName(): void {
    
  }

  editPhoneNumber(): void {
   
  }

  editEmail(): void {
  
  }

  editGender(): void {
    
  }

  editBirthday(): void {
   
  }

  editAddress(): void {
   
  }
}


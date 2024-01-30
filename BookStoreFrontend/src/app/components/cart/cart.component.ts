// cart.component.ts
import { Component, Injectable, OnInit } from '@angular/core';
import { cart } from '../../interfaces/books'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUserServiceService } from 'src/app/login-user-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class CartComponent implements OnInit {
  cartItems: cart[] = [];

  constructor(private httpClient:HttpClient,private loginUserService:LoginUserServiceService) { }

  ngOnInit(): void {
    
    this.fetchCart();
  }

  
  fetchCart() {
    const user=this.loginUserService.getUser();
    
    const token=localStorage.getItem('token');
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    this.httpClient.get<any>(`http://localhost:8080/api/v1/cart/${user.userId}`,{headers})
      .subscribe(response => {
        console.log(response);
        this.cartItems = response.data;
      });
      
  }



getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
}

removeFromCart(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
        this.cartItems.splice(index, 1);
    }
}

incrementQuantity(item: any): void {
    item.quantity++;
}

decrementQuantity(item: any): void {
    if (item.quantity > 1) {
        item.quantity--;
    }
}

clearCart(): void {
    this.cartItems = [];
}

placeOrder(): void {
}
}

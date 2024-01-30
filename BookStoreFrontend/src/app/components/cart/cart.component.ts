// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { cart } from '../../interfaces/books'
import { HttpClient } from '@angular/common/http';
import { LoginUserServiceService } from 'src/app/login-user-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: cart[] = [];

  constructor(private httpClient:HttpClient,private loginUserService:LoginUserServiceService) { }

  ngOnInit(): void {
    
    this.fetchCart();
  }

  fetchCart() {
    const user=this.loginUserService.getUser();
    
    this.httpClient.get<any>(`http://localhost:8080/api/v1/cart/${user.userId}`)
      .subscribe(response => {
        console.log(response);
        this.cartItems = response.data;
      });
      
  }

  getTotalPrice(): any {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  removeFromCart(item: cart): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1); 
    }
  }
  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  // Function to increment quantity
  incrementQuantity(item: any) {
    item.quantity++;
  }

  // Function to clear the cart
  clearCart() {
    this.cartItems = []; // Clearing the cart by emptying the array
  }

  placeOrder(): void {
     console.log('Order placed!');
     }
}

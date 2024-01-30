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
  // cartItems: cart[] = [];

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

//   cartItems: any[] = [
//     { bookName: 'Book 1', price: 10, quantity: 1 },
//     { bookName: 'Book 2', price: 15, quantity: 2 },
//     { bookName: 'Book 3', price: 20, quantity: 1 }
// ];

  cartItems: any[] = [
    { bookName: 'Book 1', price: 10, quantity: 1 },
    { bookName: 'Book 2', price: 15, quantity: 2 },
    { bookName: 'Book 3', price: 20, quantity: 1 }
];

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
    // Logic for placing the order
}
}

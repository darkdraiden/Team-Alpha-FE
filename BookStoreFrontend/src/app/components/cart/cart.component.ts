// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { cart } from '../../interfaces/books'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: cart[] = [];

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks() {
    this.httpClient.get<any>('http://localhost:8080/api/v1/cart/${userId}')
      .subscribe(response => {
        this.cartItems = response.data;
      });
  }

  getTotalPrice(): any {
    return this.cartItems.reduce((total, item) => total + (item.orderPrice * item.quantity), 0);
  }

  removeFromCart(item: cart): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1); 
    }
  }

  placeOrder(): void {
     console.log('Order placed!');
     }
}

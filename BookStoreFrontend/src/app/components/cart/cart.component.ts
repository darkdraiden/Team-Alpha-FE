// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { cart } from '../../interfaces/books'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: cart[] = [];

  constructor() { }

  ngOnInit(): void {
 
    this.fetchCartItems();
  }

  fetchCartItems(): void {

    this.cartItems = [
      { bookName: 'Book 1', orderPrice: 10, quantity: 2 },
      { bookName: 'Book 2', orderPrice: 15, quantity: 1 }
    ];
  }

  getTotalPrice(): any {
    return this.cartItems.reduce((total, item) => total + (item.orderPrice * item.quantity), 0);
  }

  removeFromCart(item: cart): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1); // Remove the item from the array
    }
  }

  placeOrder(): void {
     console.log('Order placed!');
     }
}

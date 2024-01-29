import { Component } from '@angular/core';
import { OrderItem } from 'src/app/interfaces/books';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {


orders: OrderItem[] = []; 

  constructor() { }

  ngOnInit(): void {
    // Fetch order history  API o
    this.fetchOrderHistory();
  }

  fetchOrderHistory(): void {
    // replace with actual API call
    this.orders = [
      {
        id: 1,
        productName: 'Product 1',
        quantity: 2,
        totalPrice: 20,
        modeOfPayment: 'Credit Card',
        deliveryDate: '2024-01-26',
        purchaseDate: '2024-01-20',
        status: 'Delivered'
      },
      {
        id: 2,
        productName: 'Product 2',
        quantity: 1,
        totalPrice: 15,
        modeOfPayment: 'PayPal',
        deliveryDate: '2024-01-25',
        purchaseDate: '2024-01-19',
        status: 'Processing'
      }
    ];
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-veiw-all',
  templateUrl: './veiw-all.component.html',
  styleUrls: ['./veiw-all.component.css']
})
export class VeiwAllComponent {

  books = [
    { id: 1, title: 'Book Title 1', author: 'Author Name 1', image: '../../../assets/img_c1.webp', price: 20, rating: 4.5 },
    { id: 2, title: 'Book Title 2', author: 'Author Name 2', image: '../../../assets/img_c1.webp', price: 25, rating: 3.8 },
    { id: 3, title: 'Book Title 3', author: 'Author Name 3', image: '../../../assets/img_c1.webp', price: 18, rating: 4.0 },
    { id: 4, title: 'Book Title 4', author: 'Author Name 4', image: '../../../assets/img_c1.webp', price: 30, rating: 4.2 },
    { id: 5, title: 'Book Title 5', author: 'Author Name 5', image: '../../../assets/img_c1.webp', price: 22, rating: 4.7 },
    { id: 6, title: 'Book Title 6', author: 'Author Name 6', image: '../../../assets/img_c1.webp', price: 28, rating: 3.5 }
  ];
  onRateChange(event: any, book: any) {
    book.rating = event.value;
  }  
}

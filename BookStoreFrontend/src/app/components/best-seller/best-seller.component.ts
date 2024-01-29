import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent {
  constructor(private http :HttpClient){}
  books: any[] = [];
  imageSrc='../../../assets/img_c2.webp';
  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks() {
    this.http.get<any>('http://localhost:8080/api/v1/book/top-selling?limit=4')
      .subscribe((response: { data: any[]; }) => {
        this.books = response.data;
      });
  }
}

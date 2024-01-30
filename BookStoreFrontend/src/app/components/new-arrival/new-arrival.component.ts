import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.css']
})
export class NewArrivalComponent {

  constructor(private http :HttpClient){}
  books: any[] = [];
  ngOnInit(): void {
    this.fetchBooks();
  } 

  fetchBooks() {
    this.http.get<any>('http://localhost:8080/api/v1/book/new-arrivals?limit=4')
      .subscribe((response: { data: any[]; }) => {
        this.books = response.data;
      });
  }
}

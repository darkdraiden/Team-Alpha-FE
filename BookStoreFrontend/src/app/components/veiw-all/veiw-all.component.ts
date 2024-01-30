import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiw-all',
  templateUrl: './veiw-all.component.html',
  styleUrls: ['./veiw-all.component.css']
})
export class VeiwAllComponent implements OnInit{
books:any[]=[];
constructor(private httpClient:HttpClient){}

ngOnInit(): void {
  this.fetchBooks();
}


fetchBooks() {
  this.httpClient.get<any>('http://localhost:8080/api/v1/book')
    .subscribe(response => {
      this.books = response.data;
    });
}

  showbook:boolean=false;
  bookDetail(){
this.showbook=true;
  }

  currentBook: any;


  setCurrentBook(book: any) {
    this.currentBook = book;
  }
}

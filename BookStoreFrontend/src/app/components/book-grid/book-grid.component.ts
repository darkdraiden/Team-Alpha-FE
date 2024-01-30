import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  
  styleUrls: ['./book-grid.component.css']
})
export class BookGridComponent {
  
  constructor(private authService : AuthService,private http: HttpClient){}

  // books = [
  //   { name: 'Book 1', author: 'Author 1', imageSrc: '../../../assets/img_c2.webp' },
  //   { name: 'Book 2', author: 'Author 2', imageSrc: '../../../assets/img_c2.webp' },
  //   { name: 'Book 3', author: 'Author 3', imageSrc: '../../../assets/img_c2.webp' },
  //   { name: 'Book 4', author: 'Author 3', imageSrc: '../../../assets/img_c2.webp' },
  // ];

  books: any[] = [];
  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks() {
    this.http.get<any>('http://localhost:8080/api/v1/book/hot-deals?limit=4')
      .subscribe((response: { data: any[]; }) => {
        this.books = response.data;
      });
  }


  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}

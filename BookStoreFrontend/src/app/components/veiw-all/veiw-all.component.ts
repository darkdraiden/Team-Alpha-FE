import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { LoginUserServiceService } from 'src/app/login-user-service.service';

@Component({
  selector: 'app-veiw-all',
  templateUrl: './veiw-all.component.html',
  styleUrls: ['./veiw-all.component.css']
})

export class VeiwAllComponent implements OnInit{
books:any[]=[];
buttonText: string = 'Add to Cart';
buttonTextMap: Map<string, string> = new Map<string, string>();
constructor(private httpClient:HttpClient,private ls:LoginUserServiceService){}

user:any;

ngOnInit(): void {
  this.fetchBooks();
  this.user=this.ls.getUser();
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

  addToCart(bookId:any,quantity:any) {
    const storedUser=localStorage.getItem('user');
    const user=JSON.parse(storedUser ? storedUser:"sad");
   
    
    const cartItem={
      bookId,
      quantity,
      userId:user.id
    }

    const token=localStorage.getItem('token');
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.httpClient.post(`http://localhost:8080/api/v1/cart/create/`,cartItem,{headers})

  }
}

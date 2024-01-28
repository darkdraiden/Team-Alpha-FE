import { Component } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  authors = [
    { name: 'Author 1', photoUrl: '../../../assets/imagesAuth.jpeg' },
    { name: 'Author 2', photoUrl: '../../../assets/imagesAuth.jpeg' },
    { name: 'Author 3', photoUrl: '../../../assets/imagesAuth.jpeg' },
    { name: 'Author 4', photoUrl: '../../../assets/imagesAuth.jpeg' },
    { name: 'Author 5', photoUrl: '../../../assets/imagesAuth.jpeg' },
    { name: 'Author 6', photoUrl: '../../../assets/imagesAuth.jpeg' },
    { name: 'Author 7', photoUrl: '../../../assets/imagesAuth.jpeg' },
    { name: 'Author 8', photoUrl: '../../../assets/imagesAuth.jpeg' },
  ];

  authorGroups: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.groupAuthors();
  }

  groupAuthors(): void {
    const groupSize = 4; 
    for (let i = 0; i < this.authors.length; i += groupSize) {
      this.authorGroups.push(this.authors.slice(i, i + groupSize));
    }
  }
  
  
}

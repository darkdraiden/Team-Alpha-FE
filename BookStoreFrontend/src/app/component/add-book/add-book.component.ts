import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  bookForm:any;

  constructor(private fb: FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      publication: [''],
      genre: [''],
      description: [''],
      language: ['']
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const formData = this.bookForm.value;
      this.authService.addBook(formData).subscribe(
        response => {
          // Handle success response
          console.log('Book added successfully:', response);
          // Provide feedback to the user
        },
        error => {
          // Handle error response
          console.error('Error adding book:', error);
          // Provide feedback to the user
        }
      );
    }
  }
}


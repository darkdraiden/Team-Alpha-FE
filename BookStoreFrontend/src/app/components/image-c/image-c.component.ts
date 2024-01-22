// image-c.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-c',
  templateUrl: './image-c.component.html',
  styleUrls: ['./image-c.component.css']
})
export class ImageCComponent implements OnInit {
  private slideIndex: number = 1;

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number): void {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number): void {
    let i: number;
    let slides: HTMLCollectionOf<Element> = document.getElementsByClassName("carousel-item");

    if (n > slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = "none";
    }

    (slides[this.slideIndex - 1] as HTMLElement).style.display = "block";
  }
}

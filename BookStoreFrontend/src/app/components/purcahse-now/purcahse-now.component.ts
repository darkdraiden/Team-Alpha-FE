import { Component, Input } from '@angular/core';
import { VeiwAllComponent } from '../veiw-all/veiw-all.component';
@Component({
  selector: 'app-purcahse-now',
  templateUrl: './purcahse-now.component.html',
  styleUrls: ['./purcahse-now.component.css']
})
export class PurcahseNowComponent {

  constructor(private veiwAll : VeiwAllComponent){}

  @Input() book:any;
  buttonText: string = 'Add to Cart';

  addToCart() {
     this.buttonText = 'Item Added';
  }

  counterValue: number = 1;

  increment() {
    this.counterValue++;
  }

  decrement() {
    if (this.counterValue > 1) {
      this.counterValue--;
    }
  }
}

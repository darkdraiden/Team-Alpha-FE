import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Output() filterChange: EventEmitter<any> = new EventEmitter();

  filters = [
    { category: 'Genre', options: ['Fiction', 'Non-Fiction', 'Mystery', 'Romance','Adventure','Science Fiction','Drama','Motivational'] },
    { category: 'Category', options: ['Hot Deals', 'Best Seller', 'Top Rated', 'New Arrival'] },
    { category: 'Price', options: ['low to high', 'high to low'] }
  ];
  constructor() { }

  onCheckboxChange(filterCategory: string, option: string) {
    this.filterChange.emit({ category: filterCategory, option: option });
  }
}

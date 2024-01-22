import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookIconsComponent } from './book-icons.component';

describe('BookIconsComponent', () => {
  let component: BookIconsComponent;
  let fixture: ComponentFixture<BookIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookIconsComponent]
    });
    fixture = TestBed.createComponent(BookIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

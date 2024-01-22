import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCComponent } from './image-c.component';

describe('ImageCComponent', () => {
  let component: ImageCComponent;
  let fixture: ComponentFixture<ImageCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageCComponent]
    });
    fixture = TestBed.createComponent(ImageCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

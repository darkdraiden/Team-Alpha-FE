import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurcahseNowComponent } from './purcahse-now.component';

describe('PurcahseNowComponent', () => {
  let component: PurcahseNowComponent;
  let fixture: ComponentFixture<PurcahseNowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurcahseNowComponent]
    });
    fixture = TestBed.createComponent(PurcahseNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

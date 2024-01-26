import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwAllComponent } from './veiw-all.component';

describe('VeiwAllComponent', () => {
  let component: VeiwAllComponent;
  let fixture: ComponentFixture<VeiwAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeiwAllComponent]
    });
    fixture = TestBed.createComponent(VeiwAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

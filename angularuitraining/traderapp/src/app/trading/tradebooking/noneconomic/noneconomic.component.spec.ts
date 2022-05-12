import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneconomicComponent } from './noneconomic.component';

describe('NoneconomicComponent', () => {
  let component: NoneconomicComponent;
  let fixture: ComponentFixture<NoneconomicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoneconomicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneconomicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

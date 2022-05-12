import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradebookingComponent } from './tradebooking.component';

describe('TradebookingComponent', () => {
  let component: TradebookingComponent;
  let fixture: ComponentFixture<TradebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradebookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

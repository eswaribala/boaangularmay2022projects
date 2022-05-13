import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencydeleteComponent } from './currencydelete.component';

describe('CurrencydeleteComponent', () => {
  let component: CurrencydeleteComponent;
  let fixture: ComponentFixture<CurrencydeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencydeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencydeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

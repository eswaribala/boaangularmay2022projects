import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotodeleteComponent } from './photodelete.component';

describe('PhotodeleteComponent', () => {
  let component: PhotodeleteComponent;
  let fixture: ComponentFixture<PhotodeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotodeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotodeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

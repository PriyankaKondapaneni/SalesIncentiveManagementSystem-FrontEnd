import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalesPersonComponent } from './create-sales-person.component';

describe('CreateSalesPersonComponent', () => {
  let component: CreateSalesPersonComponent;
  let fixture: ComponentFixture<CreateSalesPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSalesPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSalesPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

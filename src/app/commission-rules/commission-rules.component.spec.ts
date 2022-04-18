import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionRulesComponent } from './commission-rules.component';

describe('CommissionRulesComponent', () => {
  let component: CommissionRulesComponent;
  let fixture: ComponentFixture<CommissionRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommissionRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

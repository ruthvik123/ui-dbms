import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundComponentComponent } from './refund-component.component';

describe('RefundComponentComponent', () => {
  let component: RefundComponentComponent;
  let fixture: ComponentFixture<RefundComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

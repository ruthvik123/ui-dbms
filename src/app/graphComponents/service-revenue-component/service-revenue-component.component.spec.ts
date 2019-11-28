import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRevenueComponentComponent } from './service-revenue-component.component';

describe('ServiceRevenueComponentComponent', () => {
  let component: ServiceRevenueComponentComponent;
  let fixture: ComponentFixture<ServiceRevenueComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceRevenueComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRevenueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalProfitsComponentComponent } from './total-profits-component.component';

describe('TotalProfitsComponentComponent', () => {
  let component: TotalProfitsComponentComponent;
  let fixture: ComponentFixture<TotalProfitsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalProfitsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalProfitsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

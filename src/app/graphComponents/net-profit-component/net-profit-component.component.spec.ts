import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetProfitComponentComponent } from './net-profit-component.component';

describe('NetProfitComponentComponent', () => {
  let component: NetProfitComponentComponent;
  let fixture: ComponentFixture<NetProfitComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetProfitComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetProfitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

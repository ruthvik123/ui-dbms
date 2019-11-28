import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerShareComponentComponent } from './partner-share-component.component';

describe('PartnerShareComponentComponent', () => {
  let component: PartnerShareComponentComponent;
  let fixture: ComponentFixture<PartnerShareComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerShareComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerShareComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

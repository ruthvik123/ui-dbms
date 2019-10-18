import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputdateComponent } from './inputdate.component';

describe('InputdateComponent', () => {
  let component: InputdateComponent;
  let fixture: ComponentFixture<InputdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

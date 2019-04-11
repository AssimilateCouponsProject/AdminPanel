import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponRegistrationComponent } from './coupon-registration.component';

describe('CouponRegistrationComponent', () => {
  let component: CouponRegistrationComponent;
  let fixture: ComponentFixture<CouponRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

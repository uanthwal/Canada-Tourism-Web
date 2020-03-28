import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPaymentComponent } from './booking-payment.component';

describe('BookingPaymentComponent', () => {
  let component: BookingPaymentComponent;
  let fixture: ComponentFixture<BookingPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

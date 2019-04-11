import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-coupon-registration',
  templateUrl: './coupon-registration.component.html',
  styleUrls: ['./coupon-registration.component.css']
})
export class CouponRegistrationComponent implements OnInit {

  constructor(private router : Router) { }

  // CouponSubmit(): void{
  //   this.router.navigate(['/CouponRegistration']);
  // }
  // CouponSubmit() {
  //   if (this.CouponForm.valid) {
  //     console.log("Form Submitted!");
  //     this.CouponForm.reset();
  //   }
  // }

  ngOnInit() {
  }

}

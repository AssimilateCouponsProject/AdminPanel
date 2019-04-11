import { Component, OnInit } from '@angular/core';
import { RegularExps } from './RegularExps';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  RegExp: RegularExps[] = [
    {
      email: null,
      password: null
    }
  ]


  constructor(private router: Router) { }

  onSubmit(): void {
    this.router.navigate(['/CouponRegistration']);
  }

  ngOnInit() {
  }

}

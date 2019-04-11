// import { CountryCodeService } from './../country-code.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegularExps } from './RegularExps';
import { Country } from './countryCode.model';
import { CountryCodeService } from '../country-code.service';

// import { Observable } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  RegExp: RegularExps[] = [
    {
      email: null,
      password: null,
      mobNo: null
    }
  ]
  constructor(private router: Router, private codeService: CountryCodeService) { }

  onSubmit() {
    this.router.navigate(['/login']);
  }
  countries: Country[] = [
    { name: null, callingCodes: null }
  ];

  ngOnInit() {
    this.codeService.getCountryCode().subscribe(data => this.countries = data);
  }

}

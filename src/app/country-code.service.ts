import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './register/countryCode.model';

@Injectable({
  providedIn: 'root'
})
export class CountryCodeService {

  constructor(private http: HttpClient) { }

  url : string ="http://restcountries.eu/rest/v2/all";

  getCountryCode(): Observable<Country[]> {
    
    return this.http.get<Country[]>(this.url);

  }
}

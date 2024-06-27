import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private boundariesUrl = 'https://boundaries.io/api/boundary/zipcode'; // Replace with actual endpoint
  private apiKey = 'YOUR_BOUNDARIES_IO_API_KEY';

  constructor(private http: HttpClient) { }

  getZipCodeBoundary(zipCode: string): Observable<any> {
    return this.http.get(`${this.boundariesUrl}/${zipCode}?api_key=${this.apiKey}`);
  }
}

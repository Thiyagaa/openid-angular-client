import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:8081/cars';
  getCars(): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Flight } from '../model/Flight';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  private baseUrl = 'https://ajjauregui-gpn-backend.herokuapp.com/api/flights';

  constructor(private httpClient: HttpClient) {}
  getFlights(): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(this.baseUrl);
  }
  getFlightsByOrigin(data: Object): Observable<Flight[]> {
    console.log(data);
    return this.httpClient.post<Flight[]>(`${this.baseUrl}/byorigin`, data);
  }
}

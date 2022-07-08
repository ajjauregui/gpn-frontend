import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../../services/flights.service';
import { Flight } from '../../model/Flight';

@Component({
  selector: 'app-flight-by-origin',
  templateUrl: './flight-by-origin.component.html',
  styleUrls: ['./flight-by-origin.component.css'],
})
export class FlightByOriginComponent implements OnInit {
  public flights: Flight[] = [];
  public origin: string = '';
  public destination: string = '';

  page = 1;
  pageSize = 6;
  collectionSize = 0;

  constructor(private flightsService: FlightsService) {}

  ngOnInit(): void {}
  getFlightsByOrigin() {
    const data: object = { origin: this.origin, destination: this.destination };
    console.log(data);
    this.flightsService.getFlightsByOrigin(data).subscribe((response) => {
      this.flights = response;
      this.collectionSize = this.flights.length;

      this.flights = this.flights
        .map((flight, i) => ({ counter: i + 1, ...flight }))
        .slice(
          (this.page - 1) * this.pageSize,
          (this.page - 1) * this.pageSize + this.pageSize
        );
    });
  }
}

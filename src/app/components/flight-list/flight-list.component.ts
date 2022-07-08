import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../../services/flights.service';
import { Flight } from '../../model/Flight';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css'],
})
export class FlightListComponent implements OnInit {
  public flights: Flight[] = [];
  page = 1;
  pageSize = 6;
  collectionSize = 0;

  constructor(private flightsService: FlightsService) {}

  ngOnInit(): void {
    this.getFlights();
  }
  getFlights() {
    this.flightsService.getFlights().subscribe((response) => {
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

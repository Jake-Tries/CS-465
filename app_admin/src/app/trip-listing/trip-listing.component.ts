import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';
import { TripCardComponent } from '../trip-card/trip-card.component';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css'
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];
  message = '';

  constructor(
    private tripDataService: TripDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTrips();
  }

  private getTrips(): void {
    this.tripDataService.getTrips().subscribe({
      next: (trips: Trip[]) => {
        this.trips = trips;
        this.message = `There are ${trips.length} trips available.`;
      },
      error: (error: any) => {
        console.log('Error: ' + error);
        this.message = 'Error retrieving trips.';
      }
    });
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  public deleteTrip(tripCode: string): void {
    if (confirm('Are you sure you want to delete this trip?')) {
      this.tripDataService.deleteTrip(tripCode).subscribe({
        next: () => {
          this.getTrips();
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
    }
  }
}
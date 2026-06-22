import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';
import { TripCard } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
})
export class TripListing implements OnInit {
  trips: Trip[] = [];

  constructor(private tripDataService: TripData) {}

  ngOnInit(): void {
    this.tripDataService.getTrips().subscribe({
      next: (trips: Trip[]) => {
        this.trips = trips;
      },
      error: (err: any) => {
        console.error('Error loading trips:', err);
      }
    });
  }
}
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCard {
  @Input() trip: any;

  constructor(
    private router: Router,
    private tripDataService: TripData
  ) {}

  public editTrip(): void {
    localStorage.setItem('tripCode', this.trip.code);
    this.router.navigate(['/edit-trip']);
  }

  public deleteTrip(): void {
    if (confirm(`Delete trip ${this.trip.name}?`)) {
      this.tripDataService.deleteTrip(this.trip.code).subscribe({
        next: () => {
          window.location.href = 'http://localhost:4300/';
        },
        error: (error: any) => {
          console.error('Error deleting trip:', error);
        }
      });
    }
  }
}
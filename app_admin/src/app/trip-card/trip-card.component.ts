import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent {
  @Input() trip!: Trip;
  @Output() deleteTripEvent = new EventEmitter<string>();

  constructor(private authenticationService: AuthenticationService) {}

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  onDelete(): void {
    this.deleteTripEvent.emit(this.trip.code);
  }
}
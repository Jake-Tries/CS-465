import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css'
})
export class EditTrip implements OnInit {
  public editForm!: FormGroup;
  public submitted = false;
  public message = '';

  constructor(
    private formBuilder: FormBuilder,
    private tripDataService: TripData
  ) {}

  ngOnInit(): void {
    const tripCode = localStorage.getItem('tripCode');

    this.editForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    if (!tripCode) {
      this.message = 'No trip selected.';
      return;
    }

    this.tripDataService.getTrip(tripCode).subscribe({
      next: (tripData: Trip[]) => {
        const trip = tripData[0];

        this.editForm.patchValue({
          code: trip.code,
          name: trip.name,
          length: trip.length,
          start: trip.start?.substring(0, 10),
          resort: trip.resort,
          perPerson: trip.perPerson,
          image: trip.image,
          description: trip.description
        });
      },
      error: (error: any) => {
        console.error('Error loading trip:', error);
        this.message = 'Unable to load trip.';
      }
    });
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.editForm.invalid) {
      return;
    }

    this.tripDataService.updateTrip(this.editForm.value as Trip).subscribe({
      next: () => {
        window.location.href = 'http://localhost:4300/';
      },
      error: (error: any) => {
        console.error('Error updating trip:', error);
        this.message = 'Unable to update trip.';
      }
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css'
})
export class EditTripComponent implements OnInit {
  public editForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private tripDataService: TripDataService
  ) {}

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    const tripCode = this.route.snapshot.paramMap.get('code');

    if (tripCode) {
      this.tripDataService.getTrip(tripCode).subscribe({
        next: (trip: any) => {
          this.editForm.patchValue(Array.isArray(trip) ? trip[0] : trip);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
    }
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.editForm.valid) {
      this.tripDataService.updateTrip(this.editForm.value).subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
    }
  }
}
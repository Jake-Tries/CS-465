import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-trip.html',
  styleUrl: './add-trip.css'
})
export class AddTrip implements OnInit {
  public addForm!: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripDataService: TripData
  ) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.addForm.invalid) {
      return;
    }

    this.tripDataService.addTrip(this.addForm.value as Trip).subscribe({
      next: () => {
        window.location.href = '/';
      },
      error: (error: any) => {
        console.error('Error adding trip:', error);
      }
    });
  }
}
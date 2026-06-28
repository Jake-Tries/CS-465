import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private baseUrl = 'http://localhost:3000/api';
  private tripsUrl = `${this.baseUrl}/trips`;

  constructor(private http: HttpClient) {}

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripsUrl);
  }

  getTrip(tripCode: string): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.tripsUrl}/${tripCode}`);
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.tripsUrl, trip);
  }

  updateTrip(trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.tripsUrl}/${trip.code}`, trip);
  }

  deleteTrip(tripCode: string): Observable<any> {
    return this.http.delete(`${this.tripsUrl}/${tripCode}`);
  }

  login(user: User, password: string): Observable<AuthResponse> {
    return this.handleAuthAPICall('login', user, password);
  }

  register(user: User, password: string): Observable<AuthResponse> {
    return this.handleAuthAPICall('register', user, password);
  }

  private handleAuthAPICall(endpoint: string, user: User, password: string): Observable<AuthResponse> {
    const formData = {
      name: user.name,
      email: user.email,
      password
    };

    return this.http.post<AuthResponse>(`${this.baseUrl}/${endpoint}`, formData);
  }
}
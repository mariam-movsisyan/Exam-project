import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Booking } from '../models/models';

@Injectable({
    providedIn: 'root'
})
export class BookingService {
    booking!: Booking

    private booking$ = new BehaviorSubject<Booking | null>(null);

    setBooking (value: any) {
        this.booking$.next(value);

    }

    getBookingReview() {
        return this.booking$
    }


}

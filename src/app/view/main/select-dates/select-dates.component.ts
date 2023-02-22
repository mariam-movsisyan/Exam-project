import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingService } from 'src/app/core/services/booking.service';

@Component({
  selector: 'app-select-dates',
  templateUrl: './select-dates.component.html',
  styleUrls: ['./select-dates.component.css']
})
export class SelectDatesComponent {
  rangeDate!: Date[];
  public start!: string | null | Date;
  public end!: string | null;
  public booking$!:Observable<any>
  constructor(public bookingService: BookingService){

  }
  onChange(result: any): void {
    if(result){
      this.start = result[0]
      this.end = result[1]
      
    }
   
  }

}


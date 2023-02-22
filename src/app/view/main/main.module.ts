import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { MainComponent } from "./main.component";
import { SelectDatesComponent } from './select-dates/select-dates.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { GuestsComponent } from './guests/guests.component';
import { BookingReviewComponent } from './booking-review/booking-review.component';

const routes: Routes = [
   {path: '', component: MainComponent, children:[
    { path: 'select-dates', loadChildren: ()=>import('./select-dates/select.module').then(m=>m.SelectModule)},
    { path: 'personal-details', loadChildren: ()=>import('./personal-details/details.module').then(m=>m.DetailsModule)},
    { path: 'guests', loadChildren: ()=>import('./guests/guests.module').then(m=>m.GuestsModule)},
    { path: 'booking', loadChildren: ()=>import('./booking-review/booking.module').then(m=>m.BookingModule)},


   ]}
];
@NgModule({
    declarations: [
        MainComponent,
        SelectDatesComponent,
        PersonalDetailsComponent,
        GuestsComponent,
        BookingReviewComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: []
})
export class MainModule { }
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { BookingReviewComponent } from "./booking-review.component";

const routes: Routes = [
   {path: '', component: BookingReviewComponent}
];
@NgModule({
    declarations: [
      
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: []
})
export class BookingModule { }
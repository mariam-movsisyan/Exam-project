import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { GuestsComponent } from "./guests.component";

const routes: Routes = [
   {path: '', component: GuestsComponent}
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
export class GuestsModule { }
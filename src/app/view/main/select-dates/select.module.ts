import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { SelectDatesComponent } from "./select-dates.component";

const routes: Routes = [
   {path: '', component: SelectDatesComponent}
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
export class SelectModule { }
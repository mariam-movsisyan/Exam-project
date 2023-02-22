import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { PersonalDetailsComponent } from "./personal-details.component";

const routes: Routes = [
   {path: '', component: PersonalDetailsComponent}
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
export class DetailsModule { }
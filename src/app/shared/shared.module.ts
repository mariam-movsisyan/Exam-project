import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { CommonModule, DatePipe } from '@angular/common';


@NgModule({
    declarations: [],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        NzStepsModule,
        NzLayoutModule, 
        NzUploadModule, 
        NzBreadCrumbModule, 
        NzCollapseModule, 
        NzIconModule, 
        NzMenuModule,
        NzFormModule, 
        NzButtonModule, 
        NzInputModule, 
        NzMessageModule,
        NzSelectModule, 
        NzCardModule, 
        NzDatePickerModule, 
        NzTableModule,
        NzTabsModule,
        NzPageHeaderModule,
        CommonModule,
        DatePipe 

    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        NzStepsModule,
        NzLayoutModule, 
        NzUploadModule, 
        NzBreadCrumbModule, 
        NzCollapseModule, 
        NzIconModule, 
        NzMenuModule,
        NzFormModule, 
        NzButtonModule, 
        NzInputModule, 
        NzMessageModule,
        NzSelectModule, 
        NzCardModule, 
        NzDatePickerModule, 
        NzTableModule,
        NzTabsModule,
        NzPageHeaderModule,
        CommonModule ,
        DatePipe

    ],

})
export class SharedModule { }



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryAddComponent } from './country-add/country-add.component';
import { CountryHolidayAddComponent } from './country-holiday-add/country-holiday-add.component';
import { CountryListComponent } from './country-list/country-list.component';
import { HolidayMngmtRoutingModule } from './holiday-mngmt-routing.module';
import { MaterialsModule } from 'src/app/materials/materials.module';

@NgModule({
    declarations: [
        CountryListComponent,
        CountryHolidayAddComponent,
        CountryAddComponent,

    ],
    imports: [
        CommonModule,
        HolidayMngmtRoutingModule,
        
    ]
})
export class HolidayMngmtModule {}

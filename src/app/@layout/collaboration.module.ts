import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from '../materials/materials.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //material 디자인 적용
    BrowserAnimationsModule,
    MaterialsModule,
  ]
})
export class CollaborationModule { }

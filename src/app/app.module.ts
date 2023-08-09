import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { FormsModule } from '@angular/forms';

import { SidenavComponent } from './@layout/sidenav/sidenav.component';
import { ToolbarComponent } from './@layout/toolbar/toolbar.component';
import { CollaborationModule } from './@layout/collaboration.module';
import { CollaborationComponent } from './@layout/collaboration.component';
import { SidenavItemComponent } from './@dw/components/sidenav-item/sidenav-item.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    CollaborationComponent,
    SidenavItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollaborationModule,
    //material 디자인 적용
    BrowserAnimationsModule,
    MaterialsModule,
    //폼 모듈 적용
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

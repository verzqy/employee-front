import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdIconModule, MdInputModule, MdChipsModule, MdTabsModule} from '@angular/material';

import {ListEmployeeComponent} from './list-employee/list-employee.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {FormEmployeeComponent} from './form-employee/form-employee.component';
import {EmployeeComponent} from './employee/employee.component';
import {DetailEmployeeComponent} from './detail-employee/detail-employee.component';
import {NavigatorBarComponent} from './navigator-bar/navigator-bar.component';
import {BtnSvgComponent} from './btn-svg/btn-svg.component'

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    SearchBarComponent,
    FormEmployeeComponent,
    EmployeeComponent,
    DetailEmployeeComponent,
    NavigatorBarComponent,
    BtnSvgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdIconModule, 
    MdInputModule,
    MdChipsModule, 
    MdTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

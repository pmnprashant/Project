import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ScholarshipService } from './Service/scholarship.service';
import { StateService } from './Service/state.service';
import { StatenodalofficerComponent } from './statenodalofficer/statenodalofficer.component';
import { ViewService } from './Service/nodal.service'; 
import { NodalofficerforinstituteComponent } from './nodalofficerforinstitute/nodalofficerforinstitute.component';
import { InstituteService } from './Service/institute.service';
@NgModule({
  declarations: [
    AppComponent,
    StatenodalofficerComponent,
    NodalofficerforinstituteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ScholarshipService,StateService,ViewService,InstituteService],
  bootstrap: [AppComponent]
})
export class AppModule { }



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightsService } from './service/flights.service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  { path: '', component: FlightsComponent }
]

@NgModule({
  declarations: [
    FlightsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[FlightsService]
})
export class FlightsModule { }

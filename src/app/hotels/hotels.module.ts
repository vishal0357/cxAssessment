import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsComponent } from './hotels.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HotelsComponent }
]

@NgModule({
  declarations: [
    HotelsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HotelsModule { }

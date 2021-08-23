import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabFactoryComponent } from './tab-factory/tab-factory.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'flights', loadChildren: () => import('./flights/flights.module').then(m => m.FlightsModule) },
  { path: 'hotels', loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule) }
]

@NgModule({
  declarations: [
    AppComponent,
    TabFactoryComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

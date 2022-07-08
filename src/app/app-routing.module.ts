import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FlightByOriginComponent } from './components/flight-by-origin/flight-by-origin.component';

const routes: Routes = [
  { path: 'flights-list', component: FlightListComponent },
  { path: 'flights-list-by-origin', component: FlightByOriginComponent },
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

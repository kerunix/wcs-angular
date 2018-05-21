import { NgModule } from '@angular/core';
// Import the RouterModule and Routes classes for configuration
import { RouterModule, Routes } from '@angular/router';

// Import our components
import { HomeComponent } from './home/home.component';
import { WildersListComponent } from './wilders-list/wilders-list.component';

// Declare our routes
export const routes: Routes = [
  // A path is associated with a component
  { path: 'wilders', component: WildersListComponent },
  { path: '', component: HomeComponent },
  // Wildcard component (usually a 404)
  // /!\ ORDER MATTERS /!\ ==> Router uses a "first match" strategy
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
  ]
})
// Export the module to be used by our router
export class AppRoutingModule { }

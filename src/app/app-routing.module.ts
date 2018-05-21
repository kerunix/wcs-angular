import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WildersListComponent } from './wilders-list/wilders-list.component';

export const routes: Routes = [
  { path: 'wilders', component: WildersListComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
  ]
})
export class AppRoutingModule { }

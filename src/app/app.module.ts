import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
// Import Http client and fake API
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WildersListComponent } from './wilders-list/wilders-list.component';
import { WildersService } from './wilders.service';
import { FilterPipe } from './filter.pipe';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [AppComponent, HomeComponent, WildersListComponent, FilterPipe],
  imports: [
    BrowserModule,
    FormsModule,
    // Declare Http and fake backend, providing service to mock REST API
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    RouterModule.forRoot(routes)
  ],
  providers: [WildersService],
  bootstrap: [AppComponent]
})
export class AppModule {}

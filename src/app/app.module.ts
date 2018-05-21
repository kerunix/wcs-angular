import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Import RouterModules and the routes we configured
import { RouterModule} from '@angular/router';
import { routes } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WildersListComponent } from './wilders-list/wilders-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WildersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Gives the routes as a configuration to our RouterModule
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

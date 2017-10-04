import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// per l'ng-model
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';

// routes
import { AppRoutingModule } from './app-routing.module';

// Importo per caricare & configurare le web api in-memory
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from './hero.service';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    // importo il servizio per le web api in memoria
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
   ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent    
  ],
  providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

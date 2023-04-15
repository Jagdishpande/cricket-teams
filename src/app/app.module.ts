import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { summarypipe } from './summary.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPlayersPipe } from './shared/pipes/filter-players.pipe';

@NgModule({
  declarations: [
    AppComponent,
    summarypipe,
    FilterPlayersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

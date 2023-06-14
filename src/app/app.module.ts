import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { counterReducer } from './store/counter.reducer';
import { AsyncPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterControlsComponent,
  ],
  imports: [BrowserModule,
    StoreModule.forRoot({
      counter: counterReducer
    }),
    AsyncPipe
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './app/material-module';

import {StepperOverviewExample} from './app/views/stepper-overview-example';
import {MatAutocompleteModule,MatInputModule} from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  exports: [MatAutocompleteModule,MatInputModule],
  entryComponents: [StepperOverviewExample],
  declarations: [StepperOverviewExample],
  bootstrap: [StepperOverviewExample],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


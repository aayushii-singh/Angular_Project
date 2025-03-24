import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';

@NgModule({
declarations: [
AppComponent
],
imports: [
BrowserModule,
FormsModule // Enable two-way binding (ngModel)
],
providers: [],
  bootstrap: [AppComponent] // Start the app with AppComponent
})
export class AppModule { }

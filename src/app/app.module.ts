import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

/* import { APP_BASE_HREF } from '@angular/common';
 */
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule
} from "@angular/material";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  declarations: [AppComponent, HelloComponent, HomeComponent, AboutComponent],
  bootstrap: [AppComponent],
  /* providers: [{provide: APP_BASE_HREF, useValue: ''}] */
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Colas1Component } from './Components/Colas1/colas1/colas1.component';
import { FormsModule } from '@angular/forms';
import { Colas2Component } from './Components/colas2/colas2.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { Colas3Component } from './Components/colas3/colas3.component';

@NgModule({
  declarations: [
    AppComponent,
    Colas1Component,
    Colas2Component,
    NavbarComponent,
    Colas3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ScrumModule } from './scrum/scrum.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    
    AppComponent,
    NavBarComponent,
   
    
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule,
    AuthModule,
    ScrumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

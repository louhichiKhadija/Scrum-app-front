import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ScrumModule } from './scrum/scrum.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { FooterComponent } from './footer/footer.component';
import { NavBarProjectComponent } from './nav-bar-project/nav-bar-project.component';
import { HomeProjectComponent } from './scrum/home-project/home-project.component';

import { MatSliderModule } from '@angular/material';
import {MatCardModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NavbarModule, WavesModule, ButtonsModule, MDBBootstrapModule } from 'angular-bootstrap-md'
@NgModule({
  declarations: [

    AppComponent,
    NavBarComponent,
    FooterComponent,
    NavBarProjectComponent,
  
    
  ],
  imports: [
    NavbarModule,
    WavesModule,
    ButtonsModule,
    MDBBootstrapModule.forRoot(),
    DragDropModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ScrumModule,
    HttpClientModule,
    MatPasswordStrengthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

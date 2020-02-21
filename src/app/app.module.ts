import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ScrumModule } from './scrum/scrum.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavBarProjectComponent } from './nav-bar-project/nav-bar-project.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { MatIconModule} from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'


import { MatSliderModule } from '@angular/material';
import {MatCardModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NavbarModule, WavesModule, ButtonsModule, MDBBootstrapModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [

    AppComponent,
    FooterComponent,
    NavBarProjectComponent, 
    WelcomeComponent,
    NavBarComponent
    
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
    AuthRoutingModule,
    AuthModule,
    ScrumModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

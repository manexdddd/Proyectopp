import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomePublicComponent } from './home-public/home-public.component';
import { HelpPublicComponent } from './help-public/help-public.component';
import { EncuestasPublicComponent } from './encuestas-public/encuestas-public.component';
import { FooterPublicComponent } from './footer-public/footer-public.component';
import { NavbarPublicComponent } from './navbar-public/navbar-public.component';
import { AvisosPublicComponent } from './avisos-public/avisos-public.component';
import { AcercaDePublicComponent } from './acerca-de-public/acerca-de-public.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomePublicComponent,
    HelpPublicComponent,
    EncuestasPublicComponent,
    FooterPublicComponent,
    NavbarPublicComponent,
    AvisosPublicComponent,
    AcercaDePublicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

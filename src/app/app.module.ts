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
import { AboutPublicComponent } from './about-public/about-public.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeStudentComponent } from './home-student/home-student.component';
import { SidebarStudentComponent } from './sidebar-student/sidebar-student.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../enviroments/environment';



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
    HomeStudentComponent,
    SidebarStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

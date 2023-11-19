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
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { SesionesAdminComponent } from './sesiones-admin/sesiones-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { PerfilAdminComponent } from './perfil-admin/perfil-admin.component';
import { AttentionAdminComponent } from './attention-admin/attention-admin.component';
import { SurveyAdminComponent } from './survey-admin/survey-admin.component';
import { NoticesAdminComponent } from './notices-admin/notices-admin.component';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';

import { AvisosStudentComponent } from './avisos-student/avisos-student.component';
import { PerfilStudentComponent } from './perfil-student/perfil-student.component';
import { CarnetStudentComponent } from './carnet-student/carnet-student.component';
import { SidebarPerfilStudentComponent } from './sidebar-perfil-student/sidebar-perfil-student.component';
import { AreapsicologiaStudentComponent } from './areapsicologia-student/areapsicologia-student.component';


import { FormsModule } from '@angular/forms';
import { HomeRootComponent } from './home-root/home-root.component';
import { SidebarRootComponent } from './sidebar-root/sidebar-root.component';
import { EditperfilStudentComponent } from './editperfil-student/editperfil-student.component';

import { ProfileRootComponent } from './profile-root/profile-root.component';
import { CavisosRootComponent } from './cavisos-root/cavisos-root.component';
import { AvisosRootComponent } from './avisos-root/avisos-root.component';
import { TutorvRootComponent } from './tutorv-root/tutorv-root.component';
import { BlogPublicComponent } from './blog-public/blog-public.component';
import { BlogRootComponent } from './blog-root/blog-root.component';

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
    SidebarStudentComponent,
    AboutPublicComponent ,
    HomeAdminComponent,
    SesionesAdminComponent,
    SidebarAdminComponent,
    PerfilAdminComponent,
    AttentionAdminComponent,
    SurveyAdminComponent,
    NoticesAdminComponent,
    AvisosStudentComponent,
    PerfilStudentComponent,
    CarnetStudentComponent,
    SidebarPerfilStudentComponent,
    SidebarPerfilStudentComponent,
    AreapsicologiaStudentComponent,
    EditperfilStudentComponent,
    HomeRootComponent,
    SidebarRootComponent,
   
    ProfileRootComponent,
      CavisosRootComponent,
      AvisosRootComponent,
      TutorvRootComponent,
      BlogPublicComponent,
      BlogRootComponent,

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
    FormsModule,
    AngularFireMessagingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



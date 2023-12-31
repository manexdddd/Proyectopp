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
import { NewsessionAdminComponent } from './newsession-admin/newsession-admin.component';
import { FollowupAdminComponent } from './followup-admin/followup-admin.component';
import { RescheduledAdminComponent } from './rescheduled-admin/rescheduled-admin.component';
import { RequestsAdminComponent } from './requests-admin/requests-admin.component';
import { CavisosAdminComponent } from './cavisos-admin/cavisos-admin.component';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { CplaticasAdminComponent } from './cplaticas-admin/cplaticas-admin.component';
import { VplaticasAdminComponent } from './vplaticas-admin/vplaticas-admin.component';
import { SatisfactionsurveyAdminComponent } from './satisfactionsurvey-admin/satisfactionsurvey-admin.component';
import { ServicesurveyAdminComponent } from './servicesurvey-admin/servicesurvey-admin.component';
import { SurveysessionAdminComponent } from './surveysession-admin/surveysession-admin.component';
import { PsycoRootComponent } from './psyco-root/psyco-root.component';
import { CpsycoRootComponent } from './cpsyco-root/cpsyco-root.component';
import { CtutorRootComponent } from './ctutor-root/ctutor-root.component';
import { CplaticasRootComponent } from './cplaticas-root/cplaticas-root.component';
import { PlaticasRootComponent } from './platicas-root/platicas-root.component';
import { AsistentesRootComponent } from './asistentes-root/asistentes-root.component';
import { SolicitarAtencionComponent } from './solicitar-atencion/solicitar-atencion.component';
import { HomeTutoresComponent } from './home-tutores/home-tutores.component';
import { SidebarTutorComponent } from './sidebar-tutor/sidebar-tutor.component';
import { GrupoalumnosTutoresComponent } from './grupoalumnos-tutores/grupoalumnos-tutores.component';
import { EditAlumnoTutorComponent } from './edit-alumno-tutor/edit-alumno-tutor.component';
import { TutorSeccionTutoriasComponent } from './tutor-seccion-tutorias/tutor-seccion-tutorias.component';
import { CavisosTutorComponent } from './cavisos-tutor/cavisos-tutor.component';
import { AvisosTutorComponent } from './avisos-tutor/avisos-tutor.component';
import { PlaticasStudentComponent } from './platicas-student/platicas-student.component';
import { BlogStudentComponent } from './blog-student/blog-student.component';
import { PdetalleStudentComponent } from './pdetalle-student/pdetalle-student.component';


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
      NewsessionAdminComponent,
      FollowupAdminComponent,
      RescheduledAdminComponent,
      RequestsAdminComponent,
      CavisosAdminComponent,
      BlogAdminComponent,
      CplaticasAdminComponent,
      VplaticasAdminComponent,
      SatisfactionsurveyAdminComponent,
      ServicesurveyAdminComponent,
      SurveysessionAdminComponent,
      PsycoRootComponent,
      CpsycoRootComponent,
      CtutorRootComponent,
      CplaticasRootComponent,
      PlaticasRootComponent,
      AsistentesRootComponent,
      SolicitarAtencionComponent,
      HomeTutoresComponent,
      SidebarTutorComponent,
      GrupoalumnosTutoresComponent,
      EditAlumnoTutorComponent,
      TutorSeccionTutoriasComponent,
      CavisosTutorComponent,
      AvisosTutorComponent,
      PlaticasStudentComponent,
      BlogStudentComponent,
      PdetalleStudentComponent,
     

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



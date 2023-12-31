import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EncuestasPublicComponent } from './encuestas-public/encuestas-public.component';
import { CavisosRootComponent } from './cavisos-root/cavisos-root.component';
import { HelpPublicComponent } from './help-public/help-public.component';
import { HomePublicComponent } from './home-public/home-public.component';
import { BlogPublicComponent } from './blog-public/blog-public.component';
import { BlogRootComponent } from './blog-root/blog-root.component';
import { SignupComponent } from './signup/signup.component';
import { AvisosPublicComponent } from './avisos-public/avisos-public.component';
import { AboutPublicComponent } from './about-public/about-public.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { HomeRootComponent } from './home-root/home-root.component';
import { ProfileRootComponent } from './profile-root/profile-root.component';
import { PsycoRootComponent } from './psyco-root/psyco-root.component';
import { CtutorRootComponent } from './ctutor-root/ctutor-root.component';
import { TutorvRootComponent } from './tutorv-root/tutorv-root.component';
import { SidebarStudentComponent } from './sidebar-student/sidebar-student.component';
import { AuthGuard } from './auth.guard';
import { Role } from './services/roles';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { CpsycoRootComponent } from './cpsyco-root/cpsyco-root.component';
import { CplaticasRootComponent } from './cplaticas-root/cplaticas-root.component';
import { AsistentesRootComponent } from './asistentes-root/asistentes-root.component';
import { PlaticasRootComponent } from './platicas-root/platicas-root.component';
import { PerfilAdminComponent } from './perfil-admin/perfil-admin.component';
import { AttentionAdminComponent } from './attention-admin/attention-admin.component';
import { SurveyAdminComponent } from './survey-admin/survey-admin.component';
import { NoticesAdminComponent } from './notices-admin/notices-admin.component';
import { AvisosStudentComponent } from './avisos-student/avisos-student.component';
import { AvisosRootComponent } from './avisos-root/avisos-root.component';
import { PerfilStudentComponent } from './perfil-student/perfil-student.component';
import { EditperfilStudentComponent } from './editperfil-student/editperfil-student.component';
import { CarnetStudentComponent } from './carnet-student/carnet-student.component';
import { SidebarPerfilStudentComponent } from './sidebar-perfil-student/sidebar-perfil-student.component';
import { AreapsicologiaStudentComponent } from './areapsicologia-student/areapsicologia-student.component';
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
import { SolicitarAtencionComponent } from './solicitar-atencion/solicitar-atencion.component';
import { HomeTutoresComponent } from './home-tutores/home-tutores.component';
import { GrupoalumnosTutoresComponent } from './grupoalumnos-tutores/grupoalumnos-tutores.component';
import { EditAlumnoTutorComponent } from './edit-alumno-tutor/edit-alumno-tutor.component';
import { TutorSeccionTutoriasComponent } from './tutor-seccion-tutorias/tutor-seccion-tutorias.component';
import { AvisosTutorComponent } from './avisos-tutor/avisos-tutor.component';
import { CavisosTutorComponent } from './cavisos-tutor/cavisos-tutor.component';
import { PlaticasStudentComponent } from './platicas-student/platicas-student.component';
import { BlogStudentComponent } from './blog-student/blog-student.component';
import { PdetalleStudentComponent } from './pdetalle-student/pdetalle-student.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'cplaticas-root',component:CplaticasRootComponent},
  {path:'about-public',component:AboutPublicComponent},
  {path:'blog-public',component:BlogPublicComponent},
  {path:'blog-root',component:BlogRootComponent},
  {path:'psyco-root',component:PsycoRootComponent},
  {path:'signup',component:SignupComponent},
  {path:'encuestas-public',component:EncuestasPublicComponent},
  {path:'home-student',component:HomeStudentComponent,canActivate: [AuthGuard] ,
  data: { requiredRole: Role.Alumno}},
  {path:'help-public',component:HelpPublicComponent},
  {path:'home-public',component:HomePublicComponent},
  {path:'home-root',component:HomeRootComponent},
  {path:'tutorv-root',component:TutorvRootComponent},
  {path:'profile-root',component:ProfileRootComponent},
  {path:'platicas-root',component:PlaticasRootComponent},
  {path:'avisos-public',component:AvisosPublicComponent},

  {path:'solicitar-atencion',component:SolicitarAtencionComponent},
  {path:'home-tutores',component:HomeTutoresComponent},
  {path:'grupoalumnos-tutores',component:GrupoalumnosTutoresComponent},
  {path:'edit-alumno-tutor',component:EditAlumnoTutorComponent},
  {path:'tutor-seccion-tutorias',component:TutorSeccionTutoriasComponent },
  {path:'avisos-tutor',component:AvisosTutorComponent },
  {path:'cavisos-tutor',component:CavisosTutorComponent },

  {path:'avisos-root',component:AvisosRootComponent},
  {path:'people-root',component:AsistentesRootComponent},
  {path: 'home-admin', component:HomeAdminComponent,canActivate: [AuthGuard] ,
  data: { requiredRole: Role.Admin}},
  {path: 'perfil-admin', component:PerfilAdminComponent,canActivate: [AuthGuard] ,
  data: { requiredRole: Role.Admin}},
  {path: 'attention-admin', component:AttentionAdminComponent,canActivate: [AuthGuard] ,
  data: { requiredRole: Role.Admin}},
  {path: 'survey-admin', component:SurveyAdminComponent,canActivate: [AuthGuard] ,
  data: { requiredRole: Role.Admin}},
  {path: 'notices-admin', component:NoticesAdminComponent,canActivate: [AuthGuard] ,
  data: { requiredRole: Role.Admin}},

  {path:'cavisos',component:CavisosRootComponent},
  {path:'create-tutor',component:CtutorRootComponent},
  {path:'cpsyco',component:CpsycoRootComponent},
  {path:'avisos-student',component:AvisosStudentComponent},
  {path:'perfil-student',component:PerfilStudentComponent},
  {path:'carnet-student',component:CarnetStudentComponent},
  {path:'sidebar-perfil-student',component:SidebarPerfilStudentComponent},
  
  {path:'editperfil-student',component:EditperfilStudentComponent},
  {path:'areapsicologia-student',component:AreapsicologiaStudentComponent},
  {path: 'newsession-admin',component:NewsessionAdminComponent},
  {path: 'followup-admin',component:FollowupAdminComponent},
  {path: 'rescheduled-admin', component:RescheduledAdminComponent},
  {path: 'requests-admin', component:RequestsAdminComponent},
  {path: 'cavisos-admin', component: CavisosAdminComponent},
  {path: 'blog-admin', component: BlogAdminComponent},
  {path: 'cplaticas-admin', component: CplaticasAdminComponent},
  {path: 'vplaticas-admin', component: VplaticasAdminComponent},
  {path: 'satisfacsurvey-admin', component: SatisfactionsurveyAdminComponent},
  {path: 'servicesurvey-admin', component: ServicesurveyAdminComponent},
  {path: 'surveysession-admin', component: SurveysessionAdminComponent},
  {path: 'platicas-student', component: PlaticasStudentComponent},
  {path: 'blog-student', component: BlogStudentComponent},
  {path: 'pdetalle-student', component: PdetalleStudentComponent},
  {path:'',redirectTo: '/home-public',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

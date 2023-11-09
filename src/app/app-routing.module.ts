import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EncuestasPublicComponent } from './encuestas-public/encuestas-public.component';

import { HelpPublicComponent } from './help-public/help-public.component';
import { HomePublicComponent } from './home-public/home-public.component';
import { SignupComponent } from './signup/signup.component';
import { AvisosPublicComponent } from './avisos-public/avisos-public.component';
import { AboutPublicComponent } from './about-public/about-public.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { HomeRootComponent } from './home-root/home-root.component';
import { SidebarStudentComponent } from './sidebar-student/sidebar-student.component';
import { AuthGuard } from './auth.guard';
import { Role } from './services/roles';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { PerfilAdminComponent } from './perfil-admin/perfil-admin.component';
import { AttentionAdminComponent } from './attention-admin/attention-admin.component';
import { SurveyAdminComponent } from './survey-admin/survey-admin.component';
import { NoticesAdminComponent } from './notices-admin/notices-admin.component';
import { AvisosStudentComponent } from './avisos-student/avisos-student.component';
import { PerfilStudentComponent } from './perfil-student/perfil-student.component';
import { EditperfilStudentComponent } from './editperfil-student/editperfil-student.component';
import { CarnetStudentComponent } from './carnet-student/carnet-student.component';
import { SidebarPerfilStudentComponent } from './sidebar-perfil-student/sidebar-perfil-student.component';
import { AreapsicologiaStudentComponent } from './areapsicologia-student/areapsicologia-student.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'about-public',component:AboutPublicComponent},
  {path:'signup',component:SignupComponent},
  {path:'encuestas-public',component:EncuestasPublicComponent},
  {path:'home-student',component:HomeStudentComponent,canActivate: [AuthGuard] ,
  data: { requiredRole: Role.Alumno}},
  {path:'help-public',component:HelpPublicComponent},
  {path:'home-public',component:HomePublicComponent},
  {path:'home-root',component:HomeRootComponent},
  {path:'avisos-public',component:AvisosPublicComponent},
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

  {path:'avisos-student',component:AvisosStudentComponent},
  {path:'perfil-student',component:PerfilStudentComponent},
  {path:'carnet-student',component:CarnetStudentComponent},
  {path:'sidebar-perfil-student',component:SidebarPerfilStudentComponent},
  
  {path:'editperfil-student',component:EditperfilStudentComponent},
  {path:'areapsicologia-student',component:AreapsicologiaStudentComponent},
  {path:'',redirectTo: '/home-public',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

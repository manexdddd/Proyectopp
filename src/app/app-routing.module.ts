import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EncuestasPublicComponent } from './encuestas-public/encuestas-public.component';

import { HelpPublicComponent } from './help-public/help-public.component';
import { HomePublicComponent } from './home-public/home-public.component';
import { SignupComponent } from './signup/signup.component';
import { AvisosPublicComponent } from './avisos-public/avisos-public.component';

import { HomeStudentComponent } from './home-student/home-student.component';
import { SidebarStudentComponent } from './sidebar-student/sidebar-student.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { PerfilAdminComponent } from './perfil-admin/perfil-admin.component';
import { AttentionAdminComponent } from './attention-admin/attention-admin.component';
import { SurveyAdminComponent } from './survey-admin/survey-admin.component';
import { NoticesAdminComponent } from './notices-admin/notices-admin.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'encuestas-public',component:EncuestasPublicComponent},
  {path:'home-student',component:HomeStudentComponent},
  {path:'help-public',component:HelpPublicComponent},
  {path:'home-public',component:HomePublicComponent},
  {path:'avisos-public',component:AvisosPublicComponent},
  {path: 'home-admin', component:HomeAdminComponent},
  {path: 'perfil-admin', component:PerfilAdminComponent},
  {path: 'attention-admin', component:AttentionAdminComponent},
  {path: 'survey-admin', component:SurveyAdminComponent},
  {path: 'notices-admin', component:NoticesAdminComponent},
  {path:'',redirectTo: '/home-public',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

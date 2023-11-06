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
import { SidebarStudentComponent } from './sidebar-student/sidebar-student.component';
import { AuthGuard } from './auth.guard';
import { Role } from './services/roles';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'about-public',component:AboutPublicComponent},
  {path:'signup',component:SignupComponent},
  {path:'encuestas-public',component:EncuestasPublicComponent},
  {path:'home-student',component:HomeStudentComponent,canActivate: [AuthGuard] ,
  data: { requiredRole: Role.Alumno}},
  {path:'help-public',component:HelpPublicComponent},
  {path:'home-public',component:HomePublicComponent},
  {path:'avisos-public',component:AvisosPublicComponent},
  {path:'',redirectTo: '/home-public',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

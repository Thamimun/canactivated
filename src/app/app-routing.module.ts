import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardservice } from './auth-guard/auth-guard.component';
import { dashboardComponent } from './dashboard.component';
import { loginComponent } from './login.component';

const routes: Routes = 
[{path:'' ,component:loginComponent},
  {path:'login' ,component:loginComponent},
{path:'dashboard' ,component:dashboardComponent,canActivate:[AuthGuardservice]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

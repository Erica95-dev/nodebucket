/*
Title: Nodebucket
Author: Erica Perry
Date:03/20/21
Description: app-routing.modules.ts
*/

/* imports uses throughout */
import { HomeComponent } from './pages/home/home.component';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent} from './shared/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth.guard';


/* creating my routes and added children routes */
const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate:[AuthGuard]
      }
    ]

  },
  {
path:'session',
component: AuthLayoutComponent,
children: [
  {
    path: 'login',
    component: LoginComponent
   }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false, scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

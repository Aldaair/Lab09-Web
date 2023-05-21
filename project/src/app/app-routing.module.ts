import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PdiComponent } from './pages/pdi/pdi.component';
import { DashboardFormComponent } from './pages/dashboard-form/dashboard-form.component';

const routes: Routes = [
  {path : '' , redirectTo: '/home' , pathMatch: 'full'},
  { path : 'home' , component: HomeComponent },
  { path : 'dashboard' , component: DashboardComponent },
  { path : 'dashboard-form' , component: DashboardFormComponent },
  { path : 'pdi' , component: PdiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

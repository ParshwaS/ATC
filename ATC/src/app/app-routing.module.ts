import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirportsComponent } from './airports/airports.component';
import { AuthGuardService } from './authGuard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardService } from './loginGuard.service';
import { LogsComponent } from './logs/logs.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "register", component: RegisterComponent, canActivate:[AuthGuardService]},
  {path: "airports", component: AirportsComponent, canActivate:[AuthGuardService]},
  {path: "logs", component: LogsComponent, canActivate:[AuthGuardService]},
  {path: "login", component: LoginComponent, canActivate:[LoginGuardService]},
  {path: "", component: DashboardComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

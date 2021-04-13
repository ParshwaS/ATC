import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirportsComponent } from './airports/airports.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogsComponent } from './logs/logs.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "register", component: RegisterComponent},
  {path: "airports", component: AirportsComponent},
  {path: "logs", component: LogsComponent},
  {path: "login", component: LoginComponent},
  {path: "", component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

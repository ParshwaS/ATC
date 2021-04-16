import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HangersComponent } from './Hangers/Hangers.component';
import { FYAComponent } from './FYA/FYA.component';
import { AirportsComponent } from './airports/airports.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { FaComponent } from './fa/fa.component';
import {AuthService} from './auth.service'
import { LogsComponent } from './logs/logs.component'
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './authGuard.service';
import { LoginGuardService } from './loginGuard.service';

@NgModule({
  declarations: [					
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
      HangersComponent,
      FYAComponent,
      AirportsComponent,
      FaComponent,
      LogsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService, AuthGuardService, LoginGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

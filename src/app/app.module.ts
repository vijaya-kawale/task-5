import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';
import { StaffHomeComponent } from './staff-dashboard/staff-home/staff-home.component';
import { StaffLeaveComponent } from './staff-dashboard/staff-leave/staff-leave.component';
import { StaffHeaderComponent } from './staff-dashboard/staff-header/staff-header.component';
import { AdminLeaveComponent } from './admin-dashboard/admin-leave/admin-leave.component';
import { AdminHomeComponent } from './admin-dashboard/admin-home/admin-home.component';
import { AdminHeaderComponent } from './admin-dashboard/admin-header/admin-header.component';
import { LeaveService } from 'src/shared/service/leave.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ApplyLeaveComponent } from './staff-dashboard/apply-leave/apply-leave.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OneComponent,
    TwoComponent,
    RegistrationComponent,
    LoginComponent,
    StaffDashboardComponent,
    AdminDashboardComponent,
    LeaveDetailsComponent,
    StaffHomeComponent,
    StaffLeaveComponent,
    StaffHeaderComponent,
    AdminLeaveComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    ApplyLeaveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [ LeaveService],
  bootstrap: [AppComponent]
})
export class AppModule { }

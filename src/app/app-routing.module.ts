import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-dashboard/admin-home/admin-home.component';
import { AdminLeaveComponent } from './admin-dashboard/admin-leave/admin-leave.component';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';
import { LoginComponent } from './login/login.component';
import { OneComponent } from './one/one.component';
import { RegistrationComponent } from './registration/registration.component';
import { ApplyLeaveComponent } from './staff-dashboard/apply-leave/apply-leave.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { StaffHomeComponent } from './staff-dashboard/staff-home/staff-home.component';
import { StaffLeaveComponent } from './staff-dashboard/staff-leave/staff-leave.component';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  {
    path: 'admin', component: AdminDashboardComponent, children: [
      { path: 'admin-home', component: AdminHomeComponent },
      {path:'admin-leave', component:AdminLeaveComponent}
  ]},
  { path: 'staff', component: StaffDashboardComponent, children: [
    { path: 'staff-home', component: StaffHomeComponent },
    { path: 'staff-leave', component: StaffLeaveComponent },
    {path:'apply-leave', component:ApplyLeaveComponent}
  ] },
  { path: 'leave-details', component: LeaveDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

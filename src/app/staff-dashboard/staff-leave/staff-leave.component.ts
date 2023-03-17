import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { leaveModel } from 'src/shared/leave.model';
import { LeaveService } from 'src/shared/service/leave.service';
import {MatDialog} from '@angular/material/dialog';
import { ApplyLeaveComponent } from '../apply-leave/apply-leave.component';

@Component({
  selector: 'app-staff-leave',
  templateUrl: './staff-leave.component.html',
  styleUrls: ['./staff-leave.component.css']
})
export class StaffLeaveComponent implements OnInit {

  constructor(private leaveSerev: LeaveService, private route: Router, public dialog: MatDialog) { }
  
  openDialog(): void {
    this.dialog.open(ApplyLeaveComponent, {
      width: '500px',
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit() {

  }
}

import { LeadingComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LeaveService } from 'src/shared/service/leave.service';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.css']
})
export class LeaveDetailsComponent implements OnInit {

  totalLeaves: number | any
  approvedLeave: number | any
  rejectedLeave: number | any
  pendingLeave:number | any
  
  LeaveService: any[] = []
     
  constructor(private leaveServe:LeaveService) { }

 
  
  ngOnInit(): void {
    this.LeaveService = this.leaveServe.returnLeaveServe()
    this.totalLeaves = this.leaveServe.returnLeaveServe().length
    this.approvedLeave = this.leaveServe.returnLeaveServe().filter(l => l.status === 'Approved').length
    this.rejectedLeave = this.leaveServe.returnLeaveServe().filter(l => l.status === 'Rejected').length
    this.pendingLeave = this.leaveServe.returnLeaveServe().filter(l => l.status === 'Pending').length
  }
}

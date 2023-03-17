import { Component, OnInit } from '@angular/core';
import { LeaveService } from 'src/shared/service/leave.service';

@Component({
  selector: 'app-admin-leave',
  templateUrl: './admin-leave.component.html',
  styleUrls: ['./admin-leave.component.css']
})
export class AdminLeaveComponent implements OnInit {
  
  leaveService: any[] = []
  isApproved: boolean | any
  
  constructor(private leaveServe: LeaveService) { }
  
  ngOnInit(): void {
    this.leaveService = this.leaveServe.returnLeaveServe()
  }

  leaveAprrove(id:number) {
    this.leaveServe.approveLeave(id)
    console.log(this.leaveService)
  }

  leaveReject(id:number) {
    this.leaveServe.rejectLeave(id)
    console.log(this.leaveService)
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { leaveModel } from 'src/shared/leave.model';
import { LeaveService } from 'src/shared/service/leave.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
  
  leaveService: any[] = []
  staffLeaveDetails: FormGroup | any
  fullName:string = ''
  constructor(private router:Router, private leaveSerev: LeaveService) { }

  ngOnInit(): void {
    this.staffLeaveDetails = new FormGroup({
      fullName:new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      reasonText: new FormControl('')
    })
    this.leaveService = this.leaveSerev.returnLeaveServe()
    
  }
  onSubmit() {
    console.log(this.staffLeaveDetails)
    const newLeave = new leaveModel(this.staffLeaveDetails.value.Id = this.leaveService.length + 1, this.staffLeaveDetails.value.fullName, this.staffLeaveDetails.value.startDate, this.staffLeaveDetails.value.endDate, this.staffLeaveDetails.value.numbDays, this.staffLeaveDetails.value.reasonText, this.staffLeaveDetails.value.status = 'Pending')
    console.log(newLeave)
    this.leaveSerev.pushLeave(newLeave)
    this.router.navigate(["leave-details"])
  }
}

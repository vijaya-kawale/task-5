import { leaveModel } from "../leave.model";

export class LeaveService {
    leaveService: any[] = [
        new leaveModel(1, 'Mark George', new Date(2023, 3, 12), new Date(2023, 4, 15), 3, 'Some family function', 'Rejected'),
        new leaveModel(1, 'Andrew Huff', new Date(2023, 3, 12), new Date(2023, 4, 17), 5, 'Going to vaccation', 'Approved'),
    ]

    returnLeaveServe() {
        return this.leaveService
    }

    pushLeave(newLeave: any) {
        this.leaveService.push(newLeave)
    }

    getLeaveRequests(id: number) {
        return this.leaveService.find(leave => leave.id === id);
    }

    approveLeave(id: number) {
        const leave = this.getLeaveRequests(id)
        if (leave) {
            leave.status = 'Approved'
        }
    }

    rejectLeave(id: number) {
        const leave = this.getLeaveRequests(id)
        if (leave) {
            leave.status = 'Rejected'
        }
    }
}
export class leaveModel {
    id: number;
    fullName: string;
    startDate: any;
    endDate: any;
    numbDays: number;
    reason: string;
    status: string;
    constructor(id: number, fullName: string, startDate:any, endDate:any, numbDays:number, reason: string, status: string) {
        this.id = id,
            this.fullName = fullName,
            this.startDate = startDate,
            this.endDate = endDate,
            this.numbDays = numbDays
            this.reason = reason,
            this.status = status
    }
}
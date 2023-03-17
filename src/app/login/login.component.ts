import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any | FormGroup
  constructor(private http:HttpClient, private router:Router) { }
 
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    this.http.get("https://leave-mang-default-rtdb.asia-southeast1.firebasedatabase.app/newStaff.json").pipe(map((getDAta: any) => {
      let dataArray = []
      for (let key in getDAta) {
        dataArray.push(getDAta[key])
      }
      return dataArray
    })).subscribe(data => {
      let user = data.filter(ele => {
        // console.log(ele)
        if (ele.userName == this.loginForm.value.userName && ele.password == this.loginForm.value.password && ele.radioCheck == 'admin') {
          this.router.navigate(["admin"])
          this.loginForm.reset()
          alert("login successfull")
          //this.leaveServ.hodData = ele;
        } else if (ele.userName == this.loginForm.value.userName && ele.password == this.loginForm.value.password && ele.radioCheck == 'staff'){
          this.router.navigate(["staff"])
          alert("login successfull")
        }
      })
    })
  }
}

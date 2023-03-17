import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  signUpForm: any | FormGroup
  
  constructor(private http:HttpClient) { }
  
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      radioCheck: new FormControl(''),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      Contact: new FormControl('', Validators.required),
      selectOption: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  onSubmit() {
    console.log(this.signUpForm)
    if (this.signUpForm.valid) {
      this.http.post("https://leave-mang-default-rtdb.asia-southeast1.firebasedatabase.app/newStaff.json", this.signUpForm.value).subscribe()
      alert("registration successful")
    } else {
      alert("registration failed")
    }
    console.log(this.signUpForm.value)
    this.signUpForm.reset()
  }
}

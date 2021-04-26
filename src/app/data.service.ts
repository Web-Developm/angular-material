import { Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Structure } from '../app/str';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  data = this.fb.group({
    user: ['Fresher'],
    id: ['', [Validators.required]],
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    cpassword: ['', Validators.required],
    blood: ['', [Validators.required]],
    salary: ['', [Validators.required]],
    age: ['', [Validators.required]],
    street: ['', [Validators.required]]
  })

  group = [
    {
      "blood": "O+"
    },

    {
      "blood": "O-"
    },

    {
      "blood": "A+"
    },

    {
      "blood": "A-"
    },

    {
      "blood": "B+"
    },

    {
      "blood": "B-"
    },

    {
      "blood": "AB+"
    },

    {
      "blood": "AB-"
    }
  ];

  display() {
    console.log(this.data.value);
    this.data.reset();
  }

  //get data

  info(): Observable<any> {
    return this.http.get("http://localhost:5555/data");
  }

  add(temp:Structure):Observable<any>{
    return this.http.post("http://localhost:5555/data",temp);
  }

  ngOnInit() {
    this.data;

  }


}

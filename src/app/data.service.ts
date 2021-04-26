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

  url = "http://localhost:5555/data";

  data = this.fb.group({
    user: ['', [Validators.required]],
    id: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    cpassword: ['', Validators.required],
    blood: ['', [Validators.required]],
    salary: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    age: ['', [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    street: ['', [Validators.required,Validators.pattern('[a-zA-Z]*')]]
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

  add(temp: Structure): Observable<any> {
    return this.http.post("http://localhost:5555/data", temp);
  }

  edit(primary: Structure, id: number): Observable<any> {
    return this.http.put(`${this.url}/${id}`, primary);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`)
  }

  ngOnInit() {
    this.data;

  }


}

import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private fb:FormBuilder) { }

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

  display()
  {
    console.log(this.data.value);
    this.data.reset();
  }


}

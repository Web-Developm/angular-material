import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(private fb: FormBuilder, private ds: DataService) { }

  hide = true;





  sample: string[] = ['id', 'user', 'name', 'email', 'password', 'cpassword', 'blood', 'salary', 'age', 'street'];

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

  public temp: Array<{ id: number; user: any; name: string; email: string; password: string; cpassword: string; blood: string; salary: string; age: number; street: string }> = [];

  add() {
    this.temp.push({
      id: this.data.controls['id'].value,
      user: this.data.controls['user'].value,
      name: this.data.controls['name'].value,
      email: this.data.controls['email'].value,
      password: this.data.controls['password'].value,
      cpassword: this.data.controls['cpassword'].value,
      blood: this.data.controls['blood'].value,
      salary: this.data.controls['salary'].value,
      age: this.data.controls['age'].value,
      street: this.data.controls['street'].value
    });

    alert("Successfully added");

    console.log(this.temp);

    this.data.reset();
  }


  display() {
    console.log(this.data.value);
    this.data.reset();
  }

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

  getErrorMessage() {
    if (this.data.controls['email'].hasError('required')) {
      return 'You must enter a value';
    }

    return this.data.controls['email'].hasError('email') ? 'Not a valid email' : '';
  }

  getname() {
    if (this.data.controls['name'].hasError('required')) {
      return 'name required';
    }
    return this.data.controls['name'].hasError('pattern') ? 'Name in letters' : '';
  }

  getblood() {
    if (this.data.controls['blood'].hasError('required')) {
      return 'blood group required';
    }

    return 0;
  }

  ngOnInit(): void {
  }

  store: any[] = [
    {
      id: 0,
      name: "Ramasundar",
      location: "Bangalore",
    },

    {
      id: 1,
      name: "Alex",
      location: "London"
    },

    {
      id: 2,
      name: "Alford",
      location: "New York"
    },

    {
      id: 3,
      name: "Ravi Kumar",
      location: "Bangalore"
    },

    {
      id: 3,
      name: "Santakumar",
      location: "Chennai"
    },

    {
      id: 4,
      name: "Lucida",
      location: "San Jose"
    },

    {
      id: 5,
      name: "Anderson",
      location: "Brisban"
    },

    {
      id: 6,
      name: "Subbarao",
      location: "Bangalore"
    },

    {
      id: 7,
      name: "Mukesh",
      location: "Mumbai"
    }
  ]

}

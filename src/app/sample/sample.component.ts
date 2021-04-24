import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  data = this.fb.group({
    user:['Fresher'],
    name: ['', [Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email:['', [Validators.required, Validators.email]],
    blood: ['', [Validators.required]],
    salary: ['', [Validators.required]],
    age: ['', [Validators.required]],
    street:[''],
    date:this.fb.control('')
  })

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

  getname()
  {
    if(this.data.controls['name'].hasError('required'))
    {
      return 'name required';
    }
    return this.data.controls['name'].hasError('pattern') ? 'Name in letters':'';
  }

  getblood()
  {
    if(this.data.controls['blood'].hasError('required'))
    {
      return 'blood group required';
    }

    return 0;
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Structure } from '../str';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(private fb: FormBuilder, private ds: DataService) { }

  hide = true;

  public data: FormGroup = this.ds.data;

  public group: any = this.ds.group;

  getid() {
    if (this.data.controls['id'].hasError('required')) {
      return 'Enter the id';
    }

    return this.data.controls['id'].hasError('pattern') ? 'Not a valid id' : '';
  }

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

  getsalary() {
    if (this.data.controls['salary'].hasError('required')) {
      return 'salary required';
    }

    return this.data.controls['salary'].hasError('pattern') ? 'Salary in number' : '';
  }

  add() {
    let temp = new Structure();

    temp.id = this.data.controls['id'].value;
    temp.user = this.data.controls['user'].value;
    temp.name = this.data.controls['name'].value;
    temp.email = this.data.controls['email'].value;
    temp.password = this.data.controls['password'].value;
    temp.cpassword = this.data.controls['cpassword'].value;
    temp.blood = this.data.controls['blood'].value;
    temp.salary = this.data.controls['salary'].value;
    temp.age = this.data.controls['age'].value;
    temp.street = this.data.controls['street'].value;

    this.ds.add(temp).subscribe(
      data => {
        console.log(data);
        alert("Successfully added");
      }
    )
  }

  display() {
    this.ds.display();
  }


  ngOnInit(): void {
  }


}

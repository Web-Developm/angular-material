import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import {Structure} from '../str';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(private fb: FormBuilder, private ds: DataService) { }

  hide = true;

  public data:FormGroup=this.ds.data;

  public group:any=this.ds.group;

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

  display()
  {
    this.ds.display();
  }


  ngOnInit(): void {
  }


}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Structure } from '../str';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private ds: DataService, public dialog: MatDialog) {

  }

  openDialog(primary: any, index: any) {
    this.dialog.open(DialogComponent);
    this.update1(primary, index);
  }

  public data: FormGroup = this.ds.data;

  public group: any = this.ds.group;

  public store!: Structure[];

  sample: any = ['id', 'user', 'name', 'email', 'password', 'cpassword', 'blood', 'salary', 'age', 'street', 'edit'];

  display() {
    this.ds.info().subscribe(
      data => {
        this.store = data;
        console.log(data);
      }
    )
  }

  update1(primary: any, index: any) {

    this.data.setValue({
      user: primary.user,
      id: primary.id,
      name: primary.name,
      email: primary.email,
      password: primary.password,
      cpassword: primary.cpassword,
      blood: primary.blood,
      salary: primary.salary,
      age: primary.age,
      street: primary.street
    });

  }


  ngOnInit(): void {
    this.display();

  }




}




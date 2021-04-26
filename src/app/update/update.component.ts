import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { Structure } from '../str';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private ds: DataService, public dialog: MatDialog) {

  }

  openDialog() {
    this.dialog.open(Form);
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
    })

  }

  update2() {
    let primary = new Structure();

    primary.user = this.data.controls['user'].value;
    primary.id = this.data.controls['id'].value;
    primary.name = this.data.controls['name'].value;
    primary.email = this.data.controls['email'].value;
    primary.password = this.data.controls['password'].value;
    primary.cpassword = this.data.controls['cpassword'].value;
    primary.blood = this.data.controls['blood'].value;
    primary.age = this.data.controls['age'].value;
    primary.salary = this.data.controls['salary'].value;
    primary.street = this.data.controls['street'].value;

    let id = Number(primary.id);

    this.ds.edit(primary, id).subscribe(
      data => {
        console.log("Successfully updated");
        this.display();
      }
    )

    this.data.reset();
  }


  ngOnInit(): void {
    this.display();
  }


}



@Component({
  selector: 'form',
  templateUrl: 'form.html',
})

export class Form {

}

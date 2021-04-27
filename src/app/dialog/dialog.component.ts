import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { DataService } from '../data.service';
import {Structure} from '../str';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private ds:DataService) { }

  public data=this.ds.data;

  public group=this.ds.group;

  public store!:Structure[];


  display()
  {
    this.ds.info().subscribe(
      data=>{
        this.store=data;
        console.log(data);
      }
    )
  }

  update2()
  {
    let primary=new Structure();

    primary.user=this.data.controls['user'].value;
    primary.id=this.data.controls['id'].value;
    primary.name=this.data.controls['name'].value;
    primary.email=this.data.controls['email'].value;
    primary.password=this.data.controls['password'].value;
    primary.cpassword=this.data.controls['cpassword'].value;
    primary.blood=this.data.controls['blood'].value;
    primary.salary=this.data.controls['salary'].value;
    primary.age=this.data.controls['age'].value;
    primary.street=this.data.controls['street'].value;

    let id=Number(primary.id);

    this.ds.edit(primary,id).subscribe(
      data=>{
        alert("successfull updated");
        this.display();
      }
    )
  }

  ngOnInit(): void {
  }

}

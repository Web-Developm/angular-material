import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { Structure } from '../str';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private ds: DataService) {

  }

  public data: FormGroup = this.ds.data;

  public group: any = this.ds.group;

  public store!: Structure[];

  sample:any=['id','user','name','email','password','cpassword','blood','salary','age','street'];

  display() {
    this.ds.info().subscribe(
      data => {
        this.store = data;
        console.log(data);
      }
    )
  }


  ngOnInit(): void {
    this.display();
  }

}

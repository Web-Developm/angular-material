import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private ds: DataService) {

  }

  public data:FormGroup=this.ds.data;

  public group:any=this.ds.group;


  ngOnInit(): void {
  }

}

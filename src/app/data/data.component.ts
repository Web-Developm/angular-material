import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { Structure } from '../str';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private ds: DataService, private http: HttpClient) { }

  public items!: Structure[];


  sample = ["id","user","name", "email", "password", "cpassword", "blood", "salary", "age", "street"];

  get() {
    this.ds.info().subscribe(
      data => {
        this.items = data;
        console.log(data);
      }
    )
  }

  ngOnInit(): void {
    this.get();
  }

}

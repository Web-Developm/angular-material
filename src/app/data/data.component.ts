import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { Structure } from '../str';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private ds: DataService, private http: HttpClient) { }

  public items!: Structure[];


  sample = ["id", "user", "name", "email", "password", "cpassword", "blood", "salary", "age", "street"];



  get() {
    this.ds.info().subscribe(
      data => {
        this.items = data;
        console.log(data);
      }
    )
  }

  datasource=new MatTableDataSource<Structure>(this.items);

  @ViewChild(MatPaginator) paginator!:MatPaginator;

  filter(event: Event) {
    const filterValue: any = (event.target as HTMLInputElement).value;
    this.items.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.get();
  }

  ngAfterViewInit()
  {
    this.datasource.paginator=this.paginator;
  }

}

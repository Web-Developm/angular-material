import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Structure } from '../str';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit, AfterViewInit {

  constructor(private ds: DataService, private http: HttpClient) { }

  items = new MatTableDataSource<Structure>();

  @ViewChild(MatSort, { static: true }) sort!: MatSort;


  sample = ["id", "user", "name", "email", "password", "cpassword", "blood", "salary", "age", "street"];



  get() {
    this.ds.info().subscribe(
      data => {
        this.items = data;
        console.log(data);
      }
    )
  }


  filter(event: Event) {
    const filterValue: any = (event.target as HTMLInputElement).value;
    this.items.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.items.sort = this.sort;
    this.ds.info().subscribe(
      data => {
        this.items.data = data;
        console.log(data);
      }
    )
  }

  ngAfterViewInit() {
  }

}

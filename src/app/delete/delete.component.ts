import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { Structure } from '../str';
import { DataService } from '../data.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private http: HttpClient, private ds: DataService) { }

  public store!: Structure[];

  public temp = new MatTableDataSource(this.store);

  sample = ["user", "id", "name", "email", "password", "cpassword", "blood", "salary", "age", "street", "delete"];

  @ViewChild(MatSort) sort!: MatSort;



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

  ngAfterViewInit():void {
    this.temp.sort=this.sort;
  }

}

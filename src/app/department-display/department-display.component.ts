import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-display',
  templateUrl: './department-display.component.html',
  styleUrls: ['./department-display.component.css']
})
export class DepartmentDisplayComponent implements OnInit {

  notice: String;
  noticeList = []
  noticeItem = {}
  constructor(public http: HttpClient) { }

  ngOnInit(): void {

  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notice-display',
  templateUrl: './notice-display.component.html',
  styleUrls: ['./notice-display.component.css']
})
export class NoticeDisplayComponent implements OnInit {

  notice: String;
  noticeList = []
  noticeItem = {}
  dat = ''
  des = ''
  tod = ''
  name = ''
  depart = ''
  constructor(public http: HttpClient) { }

  AddNotice(title: String, description: String, date, department: String, creator: String) {
    this.noticeItem = {
      "title": title,
      "description": description,
      "department": department,
      "date": date,
      "creator": creator
    }
    this.http.post<any>("http://localhost:3000/notice/create", this.noticeItem)
      .subscribe(data => {
        this.noticeList = data
        console.log('successfully added')
      })
  }

  DisplayNotice(department: String) {
    this.noticeItem = {
      "department": department
    }
    console.log(department)
    this.http.post<any>('http://localhost:3000/notice/display', this.noticeItem)
      .subscribe(data => {
        this.noticeList = data
        console.log(this.noticeList)
      })
  }

  ngOnInit(): void {
    this.DisplayNotice("CSE")
  }

}

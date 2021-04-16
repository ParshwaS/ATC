import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  Logs: any;
  table:any;
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    
    fetch('http://localhost:3000/api/flights/Logs').then(res => res.json()).then(doc => {
      if(doc.status){
        this.Logs = doc.response[0];
        this.ref.detectChanges();

        this.table = $('#example2').DataTable({
          pageLength: 10,
          lengthChange: false,

        });
      }
    })
  }

}

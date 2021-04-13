import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-fa',
  templateUrl: './fa.component.html',
  styleUrls: ['./fa.component.scss']
})
export class FaComponent implements OnInit {

  FA: any;
  table:any;
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    
    fetch('http://localhost:3000/api/flights/parked').then(res => res.json()).then(doc => {
      if(doc.status){
        this.FA = doc.response;
        this.ref.detectChanges();

        this.table = $('#example').DataTable({
          pageLength: 10,
          lengthChange: false,

        });
      }
    })
  }
}

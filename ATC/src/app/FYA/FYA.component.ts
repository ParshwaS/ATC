import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-FYA',
  templateUrl: './FYA.component.html',
  styleUrls: ['./FYA.component.scss']
})
export class FYAComponent implements OnInit {

  FYA: any;
  table:any;
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    
    fetch('http://localhost:3000/api/flights/yetToArrive').then(res => res.json()).then(doc => {
      if(doc.status){
        this.FYA = doc.response;
        this.ref.detectChanges();

        this.table = $('#example').DataTable({
          pageLength: 10,
          lengthChange: false,

        });
      }
    })
  }

}

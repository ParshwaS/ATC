import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  table:any;
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
      this.table = $('#example').DataTable({
        pageLength: 10,
        lengthChange: false,
      });
      
  }

  // HandleSearchChange(str:any):any{
  //   console.log(str);
  //   console.log(this.table);
  //   this.table.search(str).draw();
  //   // this.ref.detectChanges();
  // }

}

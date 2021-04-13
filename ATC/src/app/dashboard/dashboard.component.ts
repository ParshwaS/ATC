import { ChangeDetectorRef, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
      
      
  }

  // HandleSearchChange(str:any):any{
  //   console.log(str);
  //   console.log(this.table);
  //   this.table.search(str).draw();
  //   // this.ref.detectChanges();
  // }

}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private ref: ChangeDetectorRef, private auth: AuthService, private toastr: ToastrService) {}
  flight: any = {
    flight_name: '',
    from_airport: '',
    to_airport: '',
    ETA: moment().add(10, 'minute').format('YYYY-MM-DDTHH:MM:SS'),
    ETD: moment().add(1, 'd').format('YYYY-MM-DDTHH:MM:SS'),
    runway_a: '',
    runway_b: '',
    hanger: '',
    TTF: '00:10:00',
    LUB: '',
  };
  airports: any;
  hangers: any;
  runways: any;
  curTime: any = moment().format('YYYY-MM-DDTHH:MM:SS');
  ngOnInit(): void {
    this.flight.LUB = this.auth.getTokenDetails().user_id;
    fetch('/api/airports/list')
      .then((res) => res.json())
      .then((doc: any) => {
        this.airports = doc.response;
      });
    fetch('/api/hangers/list')
      .then((res) => res.json())
      .then((doc: any) => {
        this.hangers = doc.response;
      });
    fetch('/api/runways/list')
      .then((res) => res.json())
      .then((doc: any) => {
        this.runways = doc.response;
      });
  }

  showAdd: any;

  insertFlight() {
    fetch('/api/flights/insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.flight),
    })
      .then((res) => res.json())
      .then((doc: any) => {
        if (doc.status) {
          this.toastr.success("Added", "Success");
        } else {
          this.toastr.error(doc.error.sqlMessage, "Error");
        }
      });
  }

  // HandleSearchChange(str:any):any{
  //   console.log(str);
  //   console.log(this.table);
  //   this.table.search(str).draw();
  //   // this.ref.detectChanges();
  // }
}

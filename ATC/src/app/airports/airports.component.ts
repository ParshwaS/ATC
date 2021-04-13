import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})
export class AirportsComponent implements OnInit {
  Airports: any;
  table:any;
  showAdd:any = false;
  AddFormCode: any;
  AddFormName: any;
  AddFormCountry: any;
  AddFormCity: any;
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.LoadAiports();
    
  }

  LoadAiports():any{
    fetch('http://localhost:3000/api/airports/list').then(res => res.json()).then(doc => {
      if(doc.status){
        this.Airports = doc.response;
        this.ref.detectChanges();
        this.table = $('#example').DataTable({
          pageLength: 10,
          lengthChange: false,
    
        });
        
      }
    }) 
  }

  HandleAddAirport():any{
    fetch('http://localhost:3000/api/airports/add',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        airport_code: this.AddFormCode,
        name: this.AddFormName,
        country: this.AddFormCountry,
        city: this.AddFormCity
      })
    }).then(res => res.json()).then(doc => {
      if(!doc.status){
        window.alert("Error");
      }
      else{
        this.table.destroy();
        this.AddFormCity = "";
        this.AddFormCode = "";
        this.AddFormCountry = "";
        this.AddFormName = "";
        this.LoadAiports();
      }
    })
  }

}

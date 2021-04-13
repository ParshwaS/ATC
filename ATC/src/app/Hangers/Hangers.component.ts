import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Hangers',
  templateUrl: './Hangers.component.html',
  styleUrls: ['./Hangers.component.scss']
})
export class HangersComponent implements OnInit {

  Hangers: any = [];
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    fetch('http://localhost:3000/api/hangers/dashboard').then(res => res.json()).then((doc) => {
        if(!doc.status){
          return;
        }
        this.Hangers = doc.response[0];
        this.ref.detectChanges();
        console.log(doc);
        console.log(this.Hangers)
      })
    setInterval(()=>{
      fetch('http://localhost:3000/api/hangers/dashboard').then(res => res.json()).then((doc) => {
        if(!doc.status){
          return;
        }
        this.Hangers = doc.response[0];
        this.ref.detectChanges();
      })
    },5000)
  }

}

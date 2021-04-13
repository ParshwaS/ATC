import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  HandleLogin():any{
    window.location.href="/login"
  }
  HandleRegister():any{
    window.location.href="/register"
  }

}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  log: any = false;
  constructor(private authService: AuthService, private chref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.authService.isLoggedIn();
    this.authService.loginStatus.subscribe((stat)=>{
      this.log = stat;
      this.chref.detectChanges();
    })
  }

  HandleLogin():any{
    window.location.href="/login"
  }
  HandleRegister():any{
    window.location.href="/register"
  }

  HandleLogout() {
    this.authService.logout();
    window.location.href="/login"
  }

}

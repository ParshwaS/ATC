import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AuthService } from './auth.service'
import { ToastrService } from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private toastr: ToastrService) {}

  canActivate() {
    if (this.auth.loginStatus.value) {
      this.router.navigateByUrl('/')
      return false
    }
    return true
  }
}
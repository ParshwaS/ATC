import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AuthService } from './auth.service'
import { ToastrService } from 'ngx-toastr'

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private toastr: ToastrService) {}

  canActivate() {
    if (!this.auth.loginStatus.value) {
      this.toastr.error("You are not authorized to enter this page","Authentication Error",{
        disableTimeOut: true,
        extendedTimeOut: 1000
      })
      this.router.navigateByUrl('/login')
      return false
    }
    return true
  }
}
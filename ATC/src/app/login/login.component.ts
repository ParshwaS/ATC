import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string;
  password: string;

  constructor(private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login({name: this.name, password: this.password}).subscribe((data: any)=>{
      if(data.status){
        window.location.href = '/';
      }else{
        this.toastr.error("Please Check Your Name And Password.", "Wrong Credentials");
      }
    })
  }

}

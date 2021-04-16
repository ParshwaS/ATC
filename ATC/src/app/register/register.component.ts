import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: string;
  password: string;
  confirmPassword: string;

  constructor(private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  register() {
    if(this.password==this.confirmPassword){
      this.authService.register({name: this.name, password: this.password}).subscribe((data: any)=>{
        if(data.status){
          this.toastr.success("User is Successfully Registered", "Success");
        }else{
          this.toastr.error(data.error.sqlMessage, "Error in Registering");
        }
      })
    }else{
      this.toastr.error("Please make sure password and confirm password are same", "Password Not Same");
    }
  }

}

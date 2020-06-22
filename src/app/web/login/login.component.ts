import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email:string;
  public password:string;

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmitLogin(){
    this.authService.loginEmail(this.email,this.password).
    then((res)=>{
      alert("Usuario logueado");
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email:string;
  public password:string;

  constructor(public authService:AuthService, 
              public router:Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmitLogin(){
    this.authService.loginEmail(this.email,this.password).
    then((res)=>{
      console.log(res);
      this.toastr.success('Usuario Logeado correctamente...');
      this.router.navigate(['/administrador']);
    }).catch((err)=>{
      console.log(err);
      this.toastr.error('Acceso incorrecto...');
    })
  }
}

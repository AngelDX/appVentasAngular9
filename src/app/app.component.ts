import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appVentas';

  constructor(private authService:AuthService,
              private router:Router,
              private toastr: ToastrService){}

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/']);
    this.toastr.success('Su sesión ha finalizado... gracias');
  }
}

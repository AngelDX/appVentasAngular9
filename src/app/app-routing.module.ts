import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './web/empresa/empresa.component';
import { HomeComponent } from './web/home/home.component';
import { LoginComponent } from './web/login/login.component';


const routes: Routes = [
  { path:'empresa',component:EmpresaComponent },
  { path:'home',component:HomeComponent },
  { path: '',component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

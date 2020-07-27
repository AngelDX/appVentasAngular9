import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './web/empresa/empresa.component';
import { HomeComponent } from './web/home/home.component';
import { LoginComponent } from './web/login/login.component';
import { AdministradorComponent } from './web/administrador/administrador.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductosComponent } from './web/productos/productos.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HerosComponent } from './heros/heros.component';
import { HeroListComponent } from './heros/hero-list/hero-list.component';
import { HeroAddComponent } from './heros/hero-add/hero-add.component';


const routes: Routes = [
  { path: '',component:LoginComponent },
  { path:'empresa',component:EmpresaComponent },
  { path:'home',component:HomeComponent },
  { path:'productos',component:ProductosComponent },
  { path:'catalogo',component:CatalogoComponent },
  { path:'heros',component:HerosComponent },
  { path:'heroList',component:HeroListComponent },
  { path:'heroAdd',component:HeroAddComponent },
  { path: 'administrador',component:AdministradorComponent,canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaComponent } from './web/empresa/empresa.component';
import { HomeComponent } from './web/home/home.component';
import { ProductosComponent } from './web/productos/productos.component';
import { ContactoComponent } from './web/contacto/contacto.component';
import { LoginComponent } from './web/login/login.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { AdministradorComponent } from './web/administrador/administrador.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProductoAddComponent } from './catalogo/producto-add/producto-add.component';
import { ProductoListComponent } from './catalogo/producto-list/producto-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    HomeComponent,
    ProductosComponent,
    ContactoComponent,
    LoginComponent,
    AdministradorComponent,
    CatalogoComponent,
    ProductoAddComponent,
    ProductoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ChartsModule, //Libreria para jchart
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

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


@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    HomeComponent,
    ProductosComponent,
    ContactoComponent,
    LoginComponent,
    AdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

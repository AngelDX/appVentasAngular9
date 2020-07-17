import { Component, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Catalogo } from 'src/app/models/catalogo';

@Component({
  selector: 'app-producto-add',
  templateUrl: './producto-add.component.html',
  styleUrls: ['./producto-add.component.css']
})
export class ProductoAddComponent implements OnInit {

  constructor(public catalogoService:CatalogoService,
              private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(productosForm: NgForm){
    if(productosForm.value.$key==null){
      this.catalogoService.insertProducto(productosForm.value);
      this.toastr.success('El producto se inserto con exito...');
    }else{
      this.catalogoService.updateproducto(productosForm.value);
      this.toastr.success('El producto se actualizó con exito...');
    }
    this.resetForm(productosForm);
  }

  resetForm(productosForm: NgForm){
    if(productosForm != null){
      productosForm.reset();
      this.catalogoService.selectProducto=new Catalogo();
    }
  }

}

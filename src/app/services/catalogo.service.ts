import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Catalogo } from '../models/catalogo';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  productoList: AngularFireList<any>;
  selectProducto: Catalogo=new Catalogo();

  constructor(private firebase:AngularFireDatabase) { 
    this.getProductos();
  }

  getProductos(){
    return this.productoList=this.firebase.list('catalogo')
  }

  insertProducto(producto: Catalogo){
    //this.productoList.push(producto);
    this.productoList.push({
      nombre:producto.nombre,
      categoria:producto.categoria,
      precio: producto.precio,
      cantidad: producto.cantidad,
      total: producto.precio*producto.cantidad
    });
  }

  deleteProducto($key: string){
    this.productoList.remove($key)
  }

  updateproducto(producto: Catalogo){
    this.productoList.update(producto.$key,{
      nombre:producto.nombre,
      categoria:producto.categoria,
      precio: producto.precio,
      cantidad: producto.cantidad,
      total: producto.precio*producto.cantidad
    });
  }

}

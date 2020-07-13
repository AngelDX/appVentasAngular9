import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  products:any = [];
  public pokemons: any;

  constructor(public rest:RestService) { }

  ngOnInit(): void {
    this.listarPokemons();
  }

  listarProductos(){
    this.products = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.products = data;
    });

  }

  listarPokemons(){
    this.rest
      .getpokedex().subscribe((data: object[]) => {
        console.log(data);
        this.pokemons = data;
      });
  }

  

}

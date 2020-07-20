import { Component, OnDestroy, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { Catalogo } from 'src/app/models/catalogo';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  catalogoList:Catalogo[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private catalogoService:CatalogoService, private tostr:ToastrService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };

    this.catalogoService.getProductos().snapshotChanges().subscribe(item=>{
      this.catalogoList=[];
      item.forEach(element => {
        let x=element.payload.toJSON();
        x["$key"]=element.key;
        this.catalogoList.push(x as Catalogo);
      });
      this.dtTrigger.next();
    })
   
    
    
  }

  onDelete($key:string){
    if(confirm("Estas seguro que vas a eliminar este producto?")){
      this.catalogoService.deleteProducto($key)
      this.tostr.warning("El producto se ha eliminado...")
    }
  }

  onEdit(producto:Catalogo){
    this.catalogoService.selectProducto=Object.assign({},producto);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}

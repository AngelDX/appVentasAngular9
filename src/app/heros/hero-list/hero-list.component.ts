import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  private heros: Array<Hero> = [];

  constructor(private heroService: HeroService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getHeros();
  }

  public getHeros(){
    this.heroService.getHeros().subscribe((data: Array<Hero>) => {
      this.heros = data;
      console.log(data);
    });
  }

  onEdit(hero: Hero) {
    this.heroService.selectHero = Object.assign({}, hero);
    this.router.navigate(["/heroAdd"]);
    
  }

  onDelete(id: string) {
    if(confirm('¿Estas seguro que deseas elimiar este Heroe?')) {
      this.heroService.deleteHero(id).subscribe((data: Array<Hero>) => {
        this.getHeros();
        console.log(data);
      });
      this.toastr.warning('Registro eliminado correctamente...', 'Hero Removed');
    }
  }

  onAdd(){
    this.heroService.selectHero=new Hero();
    this.router.navigate(["/heroAdd"]);
  }

}

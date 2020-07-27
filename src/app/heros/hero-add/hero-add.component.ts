import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.css']
})
export class HeroAddComponent implements OnInit {

  constructor(public heroService: HeroService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(heroForm: NgForm){
    console.log(heroForm.value);
    if(heroForm.value.id == null){
      this.heroService.insertHero(heroForm.value).subscribe((response) => {
        console.log(response);
        this.router.navigate(["/heroList"]);
      });
    }else{
      this.heroService.updateHero(heroForm.value.id,heroForm.value).subscribe((response) => {
        console.log(response);
        this.router.navigate(["/heroList"]);
      });
    }
    this.resetForm(heroForm);
    this.toastr.success('Operación realizada con éxito', 'Autor Registered');
  }

  resetForm(autorForm?: NgForm){
    if(autorForm != null)
      autorForm.reset();
      this.heroService.selectHero = new Hero();
  }

}

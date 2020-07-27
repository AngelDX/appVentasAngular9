import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroList: Array<Hero> = [];
  selectHero: Hero=new Hero();

  API_URL = 'http://127.0.0.1:8000/api';


  constructor(private httpClient: HttpClient) { }

  getHeros(){
    return this.httpClient.get(`${this.API_URL}/heroes/`);
  }

  insertHero(objeto){
    return this.httpClient.post(`${this.API_URL}/heroes/`,objeto);
  }

  updateHero(id,objeto){
    return this.httpClient.put(`${this.API_URL}/heroes/${id}/`,objeto);
  }
  
  deleteHero(id){
    return this.httpClient.delete(`${this.API_URL}/heroes/${id}/`);
  }
}

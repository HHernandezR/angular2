import { Injectable } from '@angular/core';
import {Heroe} from '../interfaces/heroe.interface';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  constructor(
    private _http:Http
  ) { }

  private globalUrl:string = "http://localhost:8090/heroe";
  private header:Headers = new Headers({
    'Content-Type':'application/json'
  });

  findAllHeroes(){
    let url = `${this.globalUrl}/all`;
    return this._http.get(url,{headers:this.header})
      .map((response) => {
        return response.json();
      })
    };

  findHeroe(data:string){
    let url = `${this.globalUrl}/find/${data}`;
    return this._http.get(url,{headers:this.header})
      .map((response) => {
        return response.json();
      })
  };

  addHeroe(heroe:Heroe){
    let url = `${this.globalUrl}/add`;
    let body = JSON.stringify(heroe);
    return this._http.post(url,body,{headers:this.header})
      .map((response) => {
        return response.json();
      })
  };

  updateHeroe(heroe:Heroe){
    let url = `${this.globalUrl}/put`;
    let body = JSON.stringify(heroe);
    return this._http.put(url,body,{headers:this.header})
      .map((response) => {
        return response.json();
      })
  };

  deleteHeroe(id:string){
    let url = `${this.globalUrl}/delete/${id}`;
    return this._http.delete(url,{headers:this.header})
      .map((response) => {
        return response.json();
      })
  };

}

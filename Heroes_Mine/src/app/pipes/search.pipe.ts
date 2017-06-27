import { Pipe, PipeTransform } from '@angular/core';
import {Heroe} from '../interfaces/heroe.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(heroes: Heroe[], term:string): any {
    if (term === undefined) return heroes;

    //function(item) Funcion que comprueba en cada elemento del array para ver si se cumple la condición
    //también se le conoce como predicado

    return heroes.filter( function(heroe) {

      for(let atributoHeroe in heroe)
      {
        if (heroe[atributoHeroe] === null){
          continue;
        }
        if(heroe[atributoHeroe].toString().toLowerCase().includes(term.toLowerCase())){
          return true;
        }

      }

      return false;
    });
  }

}

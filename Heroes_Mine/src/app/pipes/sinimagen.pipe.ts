import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinimagen'
})
export class SinimagenPipe implements PipeTransform {

  transform(value: any): string {

    let noImage = "assets/img/noimage.png";
    let imgEncode = "data:image/jpg;base64,";

    if(!value || value == ""){
      return noImage;
    }

    return imgEncode + value;
  }

}

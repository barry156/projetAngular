import { Pipe, PipeTransform } from '@angular/core';
import {DestinationService} from "./services/destination.service";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  constructor(private service:DestinationService) {}


  transform(value:any, isChecked1:boolean,isChecked2:boolean): any {
    if(!value) return null;
    if(isChecked1 ==false && isChecked2 ==false ) return null;
    return value.filter(function(values:any) {
      if (isChecked1 == true && isChecked2 == false) {
        return values.prix <= 4000;
      }else


          return value




    })

  }

}

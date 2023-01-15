import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchEmployee'
})
export class SearchEmployeePipe implements PipeTransform {
  transform(value:any,  searchtext ?:any): any {
    if(!value) return null;
    if(! searchtext) return value;

    return value.filter(function(values:any) {

      return values.title.toLowerCase().includes(searchtext.toLowerCase()) || values.id == parseInt(searchtext);

    })

  }



}

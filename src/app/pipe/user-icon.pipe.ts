import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userIcon'
})
export class UserIconPipe implements PipeTransform {
  note:string="";


  transform(value: any): string {
    if (value==5) {
      this.note = "🌕🌕🌕🌕🌕";
    } else if (value==4) {
      this.note = "🌕🌕🌕🌕🌑";
    } else if (value==3) {
      this.note = "🌕🌕🌕🌑🌑";
    }else if (value==2) {
      this.note = "🌑🌑🌕🌕🌕";
    }else if (value==1) {
      this.note = "🌕🌑🌑🌑🌑";
    }else if(value==0) {
      this.note="🌑🌑🌑🌑🌗 ";
    }

    return  this.note;

  }

}

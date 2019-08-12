import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
    if (value == null)return null;
    let resultString: string = "";
    for(var i=value.length-1;i>=0;i--){
      resultString += value.charAt(i);
    }
    return resultString;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform {

  transform(value: string, isTrue: boolean): string {
    let returnValue = '';
    if (isTrue) {
      returnValue = "Hello " + value;
    } else {
      returnValue = value + " der Boolean war leider false"
    }
    return returnValue;
  }

}

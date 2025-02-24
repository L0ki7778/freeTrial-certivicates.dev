import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../interfaces/person';

@Pipe({
    name: 'personPrefix',
    standalone: false
})
export class PersonPrefixPipe implements PipeTransform {

  transform(value: Person, displayPrefix:boolean): string {
    let prefix = "";

    if(displayPrefix) {
      prefix = (value.gender === "male")? 'Mr. ' : 'Mrs. ';
    }
    return `${prefix}${value.firstName} ${value.lastName}`;
  }

}

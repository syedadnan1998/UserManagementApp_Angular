import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: any) {
    let currentYear = new Date().getFullYear();
    let dobYear = new Date(value).getFullYear();
    return currentYear - dobYear;
  }
}

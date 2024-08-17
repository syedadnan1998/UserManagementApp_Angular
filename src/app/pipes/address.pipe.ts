import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  transform(value: any): unknown {
    let completeAdd = `${value.street} ${value.city} ${value.zipcode}`;
    return completeAdd;
  }
}

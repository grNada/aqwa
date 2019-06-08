import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterJobDate'
})
export class FilterJobDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emp',
  pure:false
})
export class EmpPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    console.log(value)
    return JSON.stringify(value);
  }

}

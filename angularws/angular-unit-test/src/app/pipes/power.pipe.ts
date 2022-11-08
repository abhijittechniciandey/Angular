import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, raiseto?: number): number {
    let pow = 2;
    if(raiseto)
      pow = raiseto;
    return value**pow;
  }

}

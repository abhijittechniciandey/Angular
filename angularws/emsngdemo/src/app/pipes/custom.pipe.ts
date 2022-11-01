import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: number, pow?:number): number {
    console.log('from pipes')
    console.log(value)
    console.log(pow)
    if(pow === undefined)
      pow = 2;
    return value**pow;
  }

}

import { AbstractControl, FormControl } from "@angular/forms";

export function hasExclamationMark(input: AbstractControl) {
  console.log(input)
    const hasExclamation = input.value.indexOf('!') >= 0;
    return hasExclamation ? null : { needsExclamation: true };
  }
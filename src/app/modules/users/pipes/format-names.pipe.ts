import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNames'
})

export class FormatNamesPipe implements PipeTransform {
  transform(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  }
}

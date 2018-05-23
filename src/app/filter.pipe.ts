import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(wilders: any, searchTerm: any): any {
    if (searchTerm === undefined) {
      return wilders;
    }

    if (wilders !== undefined) {
      return wilders.filter(wilder => {
        return wilder.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }

    return wilders;
  }
}

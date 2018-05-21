import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(wilders: any, searchTerm: any): any {
    // Check if term is undefined
    if (searchTerm === undefined) {
      return wilders;
    }

    return wilders.filter(wilder => {
      // Check if name matches the search
      return wilder.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
}

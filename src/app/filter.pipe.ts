import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, idCategory: Number): any[] {
	  searchText = searchText.toLowerCase();
    if(!items) return [];
    if(idCategory && !searchText){
      return items.filter( it => (it.sublevel_id === idCategory));
    }
    if(!idCategory && searchText){
      return items.filter( it => (it.name.toLowerCase().includes(searchText)));
    }
    if(idCategory && searchText){
      return items.filter( it => (it.name.toLowerCase().includes(searchText) && it.sublevel_id === idCategory));
    }
    return items;
   }
}
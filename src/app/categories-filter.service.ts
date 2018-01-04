import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class CategoriesFilterService {
  private idCategory = new BehaviorSubject<Number>(null);
  public currentIdCategory = this.idCategory.asObservable();
  constructor() { }

  set(id: Number){
    this.idCategory.next(id);
  }

  get(){
    return this.idCategory;
  }

}

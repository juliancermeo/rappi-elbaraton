import { TestBed, inject } from '@angular/core/testing';

import { CategoriesFilterService } from './categories-filter.service';

describe('CategoriesFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesFilterService]
    });
  });

  it('should be created', inject([CategoriesFilterService], (service: CategoriesFilterService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { ListToAdoptService } from './list-to-adopt.service';

describe('ListToAdoptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListToAdoptService = TestBed.get(ListToAdoptService);
    expect(service).toBeTruthy();
  });
});

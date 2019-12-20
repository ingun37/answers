import { TestBed } from '@angular/core/testing';

import { StaticDBService } from './static-db.service';

describe('StaticDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaticDBService = TestBed.get(StaticDBService);
    expect(service).toBeTruthy();
  });
});

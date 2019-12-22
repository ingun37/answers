import { TestBed } from '@angular/core/testing';

import { MDService } from './md.service';

describe('MDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MDService = TestBed.get(MDService);
    expect(service).toBeTruthy();
  });
});

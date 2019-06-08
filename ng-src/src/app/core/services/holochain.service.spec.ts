import { TestBed } from '@angular/core/testing';

import { HolochainService } from './holochain.service';

describe('HolochainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HolochainService = TestBed.get(HolochainService);
    expect(service).toBeTruthy();
  });
});

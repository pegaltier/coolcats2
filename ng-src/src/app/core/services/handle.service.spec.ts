import { TestBed } from '@angular/core/testing';

import { HandleService } from './handle.service';

describe('HandleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HandleService = TestBed.get(HandleService);
    expect(service).toBeTruthy();
  });
});

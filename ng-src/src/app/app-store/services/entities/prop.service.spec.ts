import { TestBed } from '@angular/core/testing';

import { PropService } from './prop.service';

describe('PropService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropService = TestBed.get(PropService);
    expect(service).toBeTruthy();
  });
});

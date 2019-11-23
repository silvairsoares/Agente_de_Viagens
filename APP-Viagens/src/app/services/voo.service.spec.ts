import { TestBed } from '@angular/core/testing';

import { VooService } from './voo.service';

describe('VooService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VooService = TestBed.get(VooService);
    expect(service).toBeTruthy();
  });
});

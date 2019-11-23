import { TestBed } from '@angular/core/testing';

import { ViagemService } from './viagem.service';

describe('ReservaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViagemService = TestBed.get(ViagemService);
    expect(service).toBeTruthy();
  });
});

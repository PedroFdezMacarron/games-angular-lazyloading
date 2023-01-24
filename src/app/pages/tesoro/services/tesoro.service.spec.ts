import { TestBed } from '@angular/core/testing';

import { TesoroService } from './tesoro.service';

describe('TesoroService', () => {
  let service: TesoroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesoroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

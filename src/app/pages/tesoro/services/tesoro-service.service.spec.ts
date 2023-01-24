import { TestBed } from '@angular/core/testing';

import { TesoroServiceService } from './tesoro-service.service';

describe('TesoroServiceService', () => {
  let service: TesoroServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesoroServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

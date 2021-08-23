import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { FlightsService } from './flights.service';

describe('FlightsService', () => {
  let service: FlightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient]
    });
    service = TestBed.inject(FlightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

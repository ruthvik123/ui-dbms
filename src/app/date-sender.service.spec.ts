import { TestBed } from '@angular/core/testing';

import { DateSenderService } from './date-sender.service';

describe('DateSenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateSenderService = TestBed.get(DateSenderService);
    expect(service).toBeTruthy();
  });
});

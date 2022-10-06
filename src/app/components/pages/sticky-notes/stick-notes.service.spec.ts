import { TestBed } from '@angular/core/testing';

import { StickNotesService } from './stick-notes.service';

describe('StickNotesService', () => {
  let service: StickNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StickNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

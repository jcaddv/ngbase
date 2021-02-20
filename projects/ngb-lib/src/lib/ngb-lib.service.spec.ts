import { TestBed } from '@angular/core/testing';

import { NgbLibService } from './ngb-lib.service';

describe('NgbLibService', () => {
  let service: NgbLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgbLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

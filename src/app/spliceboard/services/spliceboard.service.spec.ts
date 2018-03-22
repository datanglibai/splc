import { TestBed, inject } from '@angular/core/testing';

import { SpliceboardFacadeService } from './spliceboard.facade.service';

describe('SpliceboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpliceboardFacadeService]
    });
  });

  it('should be created', inject([SpliceboardFacadeService], (service: SpliceboardFacadeService) => {
    expect(service).toBeTruthy();
  }));
});

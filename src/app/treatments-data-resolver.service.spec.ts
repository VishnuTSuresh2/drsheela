import { TestBed, inject } from '@angular/core/testing';

import { TreatmentsDataResolverService } from './treatments-data-resolver.service';

describe('TreatmentsDataResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreatmentsDataResolverService]
    });
  });

  it('should ...', inject([TreatmentsDataResolverService], (service: TreatmentsDataResolverService) => {
    expect(service).toBeTruthy();
  }));
});

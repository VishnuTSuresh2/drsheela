import { TestBed, inject } from '@angular/core/testing';

import { ClinicInformationService } from './clinic-information.service';

describe('ClinicInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClinicInformationService]
    });
  });

  it('should ...', inject([ClinicInformationService], (service: ClinicInformationService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { RecieveDataFromApiServiceService } from './recieve-data-from-api-service.service';

describe('RecieveDataFromApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecieveDataFromApiServiceService]
    });
  });

  it('should be created', inject([RecieveDataFromApiServiceService], (service: RecieveDataFromApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});

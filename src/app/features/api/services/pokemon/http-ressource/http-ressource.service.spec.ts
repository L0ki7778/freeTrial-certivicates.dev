import { TestBed } from '@angular/core/testing';

import { HttpRessourceService } from '../../http-ressource.service';

describe('HttpRessourceService', () => {
  let service: HttpRessourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRessourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

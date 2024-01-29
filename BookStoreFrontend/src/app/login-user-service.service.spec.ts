import { TestBed } from '@angular/core/testing';

import { LoginUserServiceService } from './login-user-service.service';

describe('LoginUserServiceService', () => {
  let service: LoginUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

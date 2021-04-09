/*Title: auth.guard
 * Author: Erica Perry
 * Date:3/25/21
 * Description: auth
 */

import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './shared/auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

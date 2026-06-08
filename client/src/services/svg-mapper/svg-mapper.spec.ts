import { TestBed } from '@angular/core/testing';

import { SvgMapper } from './svg-mapper';

describe('SvgMapper', () => {
  let service: SvgMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgMapper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

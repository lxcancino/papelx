import { async, TestBed } from '@angular/core/testing';
import { XcoreModule } from './xcore.module';

describe('XcoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [XcoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(XcoreModule).toBeDefined();
  });
});

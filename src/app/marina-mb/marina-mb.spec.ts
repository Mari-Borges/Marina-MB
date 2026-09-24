import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarinaMb } from './marina-mb';

describe('MarinaMb', () => {
  let component: MarinaMb;
  let fixture: ComponentFixture<MarinaMb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarinaMb],
    }).compileComponents();

    fixture = TestBed.createComponent(MarinaMb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

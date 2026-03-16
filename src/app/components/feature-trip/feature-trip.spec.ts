import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTrip } from './feature-trip';

describe('FeatureTrip', () => {
  let component: FeatureTrip;
  let fixture: ComponentFixture<FeatureTrip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureTrip],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureTrip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelGuides } from './travel-guides';

describe('TravelGuides', () => {
  let component: TravelGuides;
  let fixture: ComponentFixture<TravelGuides>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelGuides],
    }).compileComponents();

    fixture = TestBed.createComponent(TravelGuides);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

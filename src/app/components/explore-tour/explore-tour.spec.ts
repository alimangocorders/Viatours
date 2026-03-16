import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreTour } from './explore-tour';

describe('ExploreTour', () => {
  let component: ExploreTour;
  let fixture: ComponentFixture<ExploreTour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreTour],
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreTour);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularThings } from './popular-things';

describe('PopularThings', () => {
  let component: PopularThings;
  let fixture: ComponentFixture<PopularThings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularThings],
    }).compileComponents();

    fixture = TestBed.createComponent(PopularThings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Callaction } from './callaction';

describe('Callaction', () => {
  let component: Callaction;
  let fixture: ComponentFixture<Callaction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Callaction],
    }).compileComponents();

    fixture = TestBed.createComponent(Callaction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

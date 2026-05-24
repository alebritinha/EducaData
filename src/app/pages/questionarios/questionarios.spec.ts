import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questionarios } from './questionarios';

describe('Questionarios', () => {
  let component: Questionarios;
  let fixture: ComponentFixture<Questionarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Questionarios],
    }).compileComponents();

    fixture = TestBed.createComponent(Questionarios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

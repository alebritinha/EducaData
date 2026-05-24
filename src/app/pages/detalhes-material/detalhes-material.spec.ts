import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesMaterial } from './detalhes-material';

describe('DetalhesMaterial', () => {
  let component: DetalhesMaterial;
  let fixture: ComponentFixture<DetalhesMaterial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesMaterial],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalhesMaterial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

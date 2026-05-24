import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('CriarQuestionario', () => {
  let component: CriarQuestionario;
  let fixture: ComponentFixture<CriarQuestionario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarQuestionario],
    }).compileComponents();

    fixture = TestBed.createComponent(CriarQuestionario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

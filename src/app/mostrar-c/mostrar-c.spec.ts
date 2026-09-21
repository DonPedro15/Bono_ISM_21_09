import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MostrarC } from './mostrar-c';

describe('MostrarC', () => {
  let component: MostrarC;
  let fixture: ComponentFixture<MostrarC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarC],
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

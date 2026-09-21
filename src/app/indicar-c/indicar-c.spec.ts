import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndicarC } from './indicar-c';

describe('IndicarC', () => {
  let component: IndicarC;
  let fixture: ComponentFixture<IndicarC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicarC],
    }).compileComponents();

    fixture = TestBed.createComponent(IndicarC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecibirC } from './recibir-c';

describe('RecibirC', () => {
  let component: RecibirC;
  let fixture: ComponentFixture<RecibirC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecibirC],
    }).compileComponents();

    fixture = TestBed.createComponent(RecibirC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

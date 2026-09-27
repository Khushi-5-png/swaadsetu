import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AiChef } from './ai-chef';

describe('AiChef', () => {
  let component: AiChef;
  let fixture: ComponentFixture<AiChef>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiChef],
    }).compileComponents();

    fixture = TestBed.createComponent(AiChef);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

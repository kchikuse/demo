import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Circle } from 'src/app/interfaces/circle.interface';
import { StepConfig } from 'src/app/interfaces/step-config.interface';

import { HelloTopBarComponent } from './hello-top-bar.component';

describe('HelloTopBarComponent', () => {
  let component: HelloTopBarComponent;
  let fixture: ComponentFixture<HelloTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelloTopBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the correct circles based on the config', () => {
    // Assemble
    const expectedCircles = [
      { value: 1, style: '' },
      { value: 2, style: 'active' },
      { value: 3, style: '' },
    ] as Circle[];

    // Act
    component.updateCircles({
      totalSteps: 3,
      currentStep: 2,
    } as StepConfig);

    // Assert
    expect(component.circles).toEqual(expectedCircles);
  });
});

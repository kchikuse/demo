import { TestBed } from '@angular/core/testing';
import { StepConfig } from 'src/app/interfaces/step-config.interface';

import { StepperService } from './stepper.service';

describe('StepperServiceService', () => {
  let service: StepperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepperService);
  });

  it('should return the default config', () => {
    // Assemble
    const expectedStep = {
      totalSteps: 3,
      currentStep: 1,
    } as StepConfig;

    // Assert
    expect(service.current()).toEqual(expectedStep);
  });

  it('should return the next config', () => {
    // Assemble
    const expectedStep = {
      totalSteps: 3,
      currentStep: 2,
    } as StepConfig;

    // Act
    service.next();

    // Assert
    expect(service.current()).toEqual(expectedStep);
  });

  it('should return the back config', () => {
    // Assemble
    const expectedStep = {
      totalSteps: 3,
      currentStep: 2,
    } as StepConfig;

    // Act
    service.next();
    service.next();
    service.back();

    // Assert
    expect(service.current()).toEqual(expectedStep);
  });

  it('should return the default config if you keep calling back', () => {
    // Assemble
    const expectedStep = {
      totalSteps: 3,
      currentStep: 1,
    } as StepConfig;

    // Act
    service.back();
    service.back();
    service.back();

    // Assert
    expect(service.current()).toEqual(expectedStep);
  });

  it('should return the last config if you keep calling next', () => {
    // Assemble
    const expectedStep = {
      totalSteps: 3,
      currentStep: 3,
    } as StepConfig;

    // Act
    service.next();
    service.next();
    service.next();

    // Assert
    expect(service.current()).toEqual(expectedStep);
  });
});

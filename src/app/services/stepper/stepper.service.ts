import { Injectable } from '@angular/core';
import { StepConfig } from 'src/app/interfaces/step-config.interface';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  readonly MAX_STEPS = 3;

  private stepConfig: StepConfig = {
    totalSteps: this.MAX_STEPS,
    currentStep: 1,
  } as StepConfig;

  current(): StepConfig {
    return this.stepConfig;
  }

  back(): StepConfig {
    let prev = this.stepConfig.currentStep - 1;

    if (prev < 1) prev = 1;

    this.stepConfig = {
      ...this.stepConfig,
      currentStep: prev,
    } as StepConfig;

    return this.stepConfig;
  }

  next(): StepConfig {
    let next = this.stepConfig.currentStep + 1;

    if (next > this.MAX_STEPS) next = this.MAX_STEPS;

    this.stepConfig = {
      ...this.stepConfig,
      currentStep: next,
    } as StepConfig;

    return this.stepConfig;
  }
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StepConfig } from './interfaces/step-config.interface';
import { StepperService } from './services/stepper/stepper.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  stepConfig: StepConfig | undefined;

  constructor(private stepperService: StepperService) {
    this.stepConfig = this.stepperService.current();
  }

  onBottomBarClick(isNext: boolean): void {
    this.stepConfig = isNext
      ? this.stepperService.next()
      : this.stepperService.back();
  }
}

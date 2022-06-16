import {
  Component,
  ChangeDetectionStrategy,
  Input,
  SimpleChanges,
} from '@angular/core';
import { Circle } from 'src/app/interfaces/circle.interface';
import { StepConfig } from 'src/app/interfaces/step-config.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'hello-top-bar',
  templateUrl: './hello-top-bar.component.html',
  styleUrls: ['./hello-top-bar.component.scss'],
})
export class HelloTopBarComponent {
  @Input() stepConfig: StepConfig | undefined;

  circles: Circle[] = [];

  ngOnChanges(changes: SimpleChanges) {
    const config = changes['stepConfig'].currentValue as StepConfig;
    if (config) this.updateCircles(config);
  }

  updateCircles(config: StepConfig): void {
    this.circles = [...Array(config.totalSteps).keys()].map((step) => {
      const value = step + 1;
      const style = config.currentStep === value ? 'active' : '';
      return { style, value } as Circle;
    });
  }

  trackCircles(index: number, circle: Circle): number {
    return circle.value;
  }
}

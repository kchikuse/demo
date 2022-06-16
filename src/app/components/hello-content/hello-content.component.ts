import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { StepConfig } from 'src/app/interfaces/step-config.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'hello-content',
  templateUrl: './hello-content.component.html',
  styleUrls: ['./hello-content.component.scss'],
})
export class HelloContentComponent {
  @Input() stepConfig: StepConfig | undefined;
}

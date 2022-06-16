import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'hello-bottom-bar',
  templateUrl: './hello-bottom-bar.component.html',
  styleUrls: ['./hello-bottom-bar.component.scss'],
})
export class HelloBottomBarComponent {
  @Output() clicked = new EventEmitter<boolean>();

  onBackClick(): void {
    this.clicked.emit(false);
  }

  onNextClick(): void {
    this.clicked.emit(true);
  }
}

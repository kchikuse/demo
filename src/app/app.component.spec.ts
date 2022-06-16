import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HelloBottomBarComponent } from './components/hello-bottom-bar/hello-bottom-bar.component';
import { HelloContentComponent } from './components/hello-content/hello-content.component';
import { HelloTopBarComponent } from './components/hello-top-bar/hello-top-bar.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [
        AppComponent,
        HelloBottomBarComponent,
        HelloContentComponent,
        HelloTopBarComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

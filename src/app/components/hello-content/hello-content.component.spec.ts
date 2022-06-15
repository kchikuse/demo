import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloContentComponent } from './hello-content.component';

describe('HelloContentComponent', () => {
  let component: HelloContentComponent;
  let fixture: ComponentFixture<HelloContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloBottomBarComponent } from './hello-bottom-bar.component';

describe('HelloBottomBarComponent', () => {
  let component: HelloBottomBarComponent;
  let fixture: ComponentFixture<HelloBottomBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloBottomBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloBottomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

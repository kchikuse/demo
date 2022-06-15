import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloTopBarComponent } from './hello-top-bar.component';

describe('HelloTopBarComponent', () => {
  let component: HelloTopBarComponent;
  let fixture: ComponentFixture<HelloTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloTopBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

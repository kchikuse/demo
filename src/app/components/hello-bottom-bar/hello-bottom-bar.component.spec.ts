import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloBottomBarComponent } from './hello-bottom-bar.component';

describe('HelloBottomBarComponent', () => {
  let component: HelloBottomBarComponent;
  let fixture: ComponentFixture<HelloBottomBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelloBottomBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloBottomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit false if the back button is clicked', () => {
    // Assemble
    const clickedSpy = spyOn(component.clicked, 'emit');

    // Act
    component.onBackClick();

    // Assert
    expect(clickedSpy).toHaveBeenCalledOnceWith(false);
  });

  it('should emit true if the next button is clicked', () => {
    // Assemble
    const clickedSpy = spyOn(component.clicked, 'emit');

    // Act
    component.onNextClick();

    // Assert
    expect(clickedSpy).toHaveBeenCalledOnceWith(true);
  });
});

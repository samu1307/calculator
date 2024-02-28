import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCalculatorComponent } from './menu-calculator.component';

describe('MenuCalculatorComponent', () => {
  let component: MenuCalculatorComponent;
  let fixture: ComponentFixture<MenuCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuCalculatorComponent]
    });
    fixture = TestBed.createComponent(MenuCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

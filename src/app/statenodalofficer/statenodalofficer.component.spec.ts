import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatenodalofficerComponent } from './statenodalofficer.component';

describe('StatenodalofficerComponent', () => {
  let component: StatenodalofficerComponent;
  let fixture: ComponentFixture<StatenodalofficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatenodalofficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatenodalofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

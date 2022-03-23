import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodalofficerforinstituteComponent } from './nodalofficerforinstitute.component';

describe('NodalofficerforinstituteComponent', () => {
  let component: NodalofficerforinstituteComponent;
  let fixture: ComponentFixture<NodalofficerforinstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodalofficerforinstituteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodalofficerforinstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

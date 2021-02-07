import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearPointsComponent } from './clear-points.component';

describe('ClearPointsComponent', () => {
  let component: ClearPointsComponent;
  let fixture: ComponentFixture<ClearPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

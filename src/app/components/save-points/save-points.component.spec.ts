import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePointsComponent } from './save-points.component';

describe('SavePointsComponent', () => {
  let component: SavePointsComponent;
  let fixture: ComponentFixture<SavePointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavePointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

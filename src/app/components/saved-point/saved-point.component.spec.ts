import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPointComponent } from './saved-point.component';

describe('SavedPointComponent', () => {
  let component: SavedPointComponent;
  let fixture: ComponentFixture<SavedPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

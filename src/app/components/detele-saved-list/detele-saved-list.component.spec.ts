import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeteleSavedListComponent } from './detele-saved-list.component';

describe('DeteleSavedListComponent', () => {
  let component: DeteleSavedListComponent;
  let fixture: ComponentFixture<DeteleSavedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeteleSavedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeteleSavedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

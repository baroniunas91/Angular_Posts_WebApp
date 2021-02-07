import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedListsItemComponent } from './saved-lists-item.component';

describe('SavedListsItemComponent', () => {
  let component: SavedListsItemComponent;
  let fixture: ComponentFixture<SavedListsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedListsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedListsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

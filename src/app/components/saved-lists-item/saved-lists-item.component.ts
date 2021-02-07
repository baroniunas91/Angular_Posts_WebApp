import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SavedItem } from 'src/app/models/SavedItem';

@Component({
  selector: 'app-saved-lists-item',
  templateUrl: './saved-lists-item.component.html',
  styleUrls: ['./saved-lists-item.component.css']
})
export class SavedListsItemComponent implements OnInit {

  @Input() item: SavedItem;
  @Output() deleteList: EventEmitter<SavedItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.deleteList.emit(this.item);
  }

}

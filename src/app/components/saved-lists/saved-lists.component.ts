import { Component, OnInit } from '@angular/core';
import { SavedItem } from 'src/app/models/SavedItem';
import { PointService } from 'src/app/services/point.service';

@Component({
  selector: 'app-saved-lists',
  templateUrl: './saved-lists.component.html',
  styleUrls: ['./saved-lists.component.css']
})
export class SavedListsComponent implements OnInit {

  lists:SavedItem[];

  constructor(private pointService:PointService) { }

  ngOnInit(): void {
    this.pointService.getSavedLists().subscribe(l => {
      this.lists = l;
    });
  }

  deleteList(savedList:SavedItem) {
    // remove from ui
    this.lists = this.lists.filter(p => p.id !== savedList.id);
    // remove from server
    this.pointService.deleteSavedList(savedList).subscribe();
  }

}

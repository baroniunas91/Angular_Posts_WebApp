import { Component, OnInit, Input } from '@angular/core';
import { SavedPoint } from 'src/app/models/SavedPoint';

@Component({
  selector: 'app-saved-point',
  templateUrl: './saved-point.component.html',
  styleUrls: ['./saved-point.component.css']
})
export class SavedPointComponent implements OnInit {

  @Input() point: SavedPoint;

  constructor() { }

  ngOnInit(): void {
  }

}

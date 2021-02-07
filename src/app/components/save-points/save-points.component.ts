import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-save-points',
  templateUrl: './save-points.component.html',
  styleUrls: ['./save-points.component.css']
})
export class SavePointsComponent implements OnInit {

  @Output() savePoints:EventEmitter<any> = new EventEmitter();
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const title = {
      title: this.title,
    }
    this.savePoints.emit(title);
  }

}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-point',
  templateUrl: './add-point.component.html',
  styleUrls: ['./add-point.component.css']
})
export class AddPointComponent implements OnInit {

  @Output() addPoint:EventEmitter<any> = new EventEmitter();
  xcoordinate: number;
  ycoordinate: number;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const point = {
      xcoordinate: this.xcoordinate,
      ycoordinate: this.ycoordinate
    }
    this.addPoint.emit(point);
  }

}

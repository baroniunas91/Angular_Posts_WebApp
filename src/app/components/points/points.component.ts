import { Component, OnInit } from '@angular/core';
import { Point } from 'src/app/models/Point';
import { PointService } from 'src/app/services/point.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {
  points:Point[];
  constructor(private pointService:PointService) { }

  ngOnInit(): void {
    this.pointService.getPoints().subscribe(points => {
      this.points = points;
    });
  }

  deletePoint(point:Point) {
    // remove from ui
    this.points = this.points.filter(p => p.id !== point.id);
    // remove from server
    this.pointService.deletePoint(point).subscribe();
  }

  addPoint(point:Point) {
    this.pointService.addPoint(point).subscribe(todo => {
      this.points.push(todo)
    });
  }
}

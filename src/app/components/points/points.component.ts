import { Component, OnInit } from '@angular/core';
import { Point } from 'src/app/models/Point';
import { PointsListTitle } from 'src/app/models/PointsListTitle';
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

  clearPoints() {
    // remove from ui
    this.points = [];
    // remove from server
    this.pointService.clearPoints().subscribe();
  }

  deletePoint(point:Point) {
    // remove from ui
    this.points = this.points.filter(p => p.id !== point.id);
    // remove from server
    this.pointService.deletePoint(point).subscribe();
  }

  addPoint(point:Point) {
    this.pointService.addPoint(point).subscribe(point => {
      if(point !== null) {
        this.points.push(point)
      } else {
        alert("Error! You can't entered dublicate point and you can't enter more than 10000 points.")
      }
    },
    (err) => {alert("Error! Coordinates range should be between -5000 and 5000")}
    );
  }

  savePoints(title:PointsListTitle) {
    this.pointService.savePoints(title).subscribe();
    alert("List of points saved!")
  }
}

import { Component, OnInit } from '@angular/core';
import { Square } from 'src/app/models/Square';
import { PointService } from 'src/app/services/point.service';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.css']
})
export class SquaresComponent implements OnInit {

  numberOfSquares:number;
  squares:Square[];

  constructor(private pointService:PointService) { }

  ngOnInit(): void {
    this.pointService.getSquares().subscribe(squares => {
      this.squares = squares;
      this.numberOfSquares = squares.length;
    });
  }
}

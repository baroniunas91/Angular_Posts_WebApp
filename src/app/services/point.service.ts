import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Point } from '../models/Point';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PointService {

  pointsUrl:string = 'https://localhost:44391/point';

  constructor(private http:HttpClient) { }

  getPoints():Observable<Point[]> {
    return this.http.get<Point[]>(`${this.pointsUrl}`);
  }

  // Delete Todo
  deletePoint(point:Point):Observable<Point> {
    const url = `${this.pointsUrl}/${point.id}`;
    return this.http.delete<Point>(url, httpOptions);
  }

  addPoint(point:Point):Observable<Point> {
    return this.http.post<Point>(this.pointsUrl, point, httpOptions);
  }
}
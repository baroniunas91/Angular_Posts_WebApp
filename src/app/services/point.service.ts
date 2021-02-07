import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Point } from '../models/Point';
import { Observable } from 'rxjs';
import { Square } from '../models/Square';
import { PointsListTitle } from '../models/PointsListTitle';
import { SavedItem } from '../models/SavedItem';

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
  squaresUrl:string = 'https://localhost:44391/squares';
  savedListUrl:string = 'https://localhost:44391/pointslist';

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

  clearPoints():Observable<Point> {
    const url = `${this.pointsUrl}`;
    return this.http.delete<Point>(url, httpOptions);
  }

  getSquares():Observable<Square[]> {
    return this.http.get<Square[]>(`${this.squaresUrl}`);
  }

  savePoints(title:PointsListTitle):Observable<PointsListTitle> {
    const url = `${this.savedListUrl}`;
    return this.http.post<PointsListTitle>(url, title, httpOptions);
  }

  getSavedLists():Observable<SavedItem[]> {
    return this.http.get<SavedItem[]>(`${this.savedListUrl}`);
  }

  deleteSavedList(savedList:SavedItem):Observable<SavedItem> {
    const url = `${this.savedListUrl}/${savedList.id}`;
    return this.http.delete<SavedItem>(url, httpOptions);
  }
}
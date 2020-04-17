import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Home from '../model/home.model';

@Injectable({
  providedIn: 'root'
})

export class HomeHttpService {
  // private ApiURL: string = 'https://localhost:44308/api/ToDo';
  private ApiURL: string = 'http://szwebprofile.com/PHP/api/list.php';
  constructor(private httpclient: HttpClient) {}

  getHomes(): Observable<Home[]> {
    return this.httpclient.get<Home[]>(this.ApiURL);
  }

  createHomes(payload: Home): Observable<Home> {
    return this.httpclient.post<Home>(this.ApiURL, JSON.stringify(payload), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

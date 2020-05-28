import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeHttpService {
  // private ApiURL: string = 'https://localhost:44308/api/ToDo';
  private ApiURL: string = 'http://szwebprofile.com/PHP/api/list.php';
  constructor(private httpClient: HttpClient) {}

  public sendGetRequest(){
    return this.httpClient.get(this.ApiURL);
  }

  // getHomes(): Observable<Home[]> {
  //   return this.httpclient.get<Home[]>(this.ApiURL);
  // }

  // createHomes(payload: Home): Observable<Home> {
  //   return this.httpclient.post<Home>(this.ApiURL, JSON.stringify(payload), {
  //     headers: { 'Content-Type': 'application/json' }
  //   });
  // }
}

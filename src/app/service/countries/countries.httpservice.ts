import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesHttpService {
  
  private Ipinfo: string = 'http://ip-api.com/json';
  private Countries_List: string = 'assets/countries.txt';
  
  constructor(private httpClient: HttpClient) {}

  public Useripinfo(){
    return this.httpClient.get(this.Ipinfo);
  }

  public Countries(){
    return this.httpClient.get(this.Countries_List);
  }

}

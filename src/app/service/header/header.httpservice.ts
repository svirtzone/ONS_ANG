import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // console.log(localStorage.getItem('locale'));
  private REST_API_SERVER_en = "http://szwebprofile.com/PHP/api/label.php?lang=en";
  private REST_API_SERVER_fr = "http://szwebprofile.com/PHP/api/label.php?lang=fr";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest_en(){
    return this.httpClient.get(this.REST_API_SERVER_en);
  }

  public sendGetRequest_fr(){
    return this.httpClient.get(this.REST_API_SERVER_fr);
  }

}
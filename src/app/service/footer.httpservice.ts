import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // console.log(localStorage.getItem('locale'));
  private REST_API_SERVER = "http://szwebprofile.com/PHP/api/footer.php";
  

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }


}
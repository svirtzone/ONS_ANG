import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {
  
 
  private REST_API_SERVER_fr = "http://szwebprofile.com/PHP/api/label.php?lang=fr";

  constructor(private httpClient: HttpClient) { }

 
  public RegisterRequest(form:any){
    return this.httpClient.post(this.REST_API_SERVER_fr,form);
  }

  public LoginRequest(form:any){
    return this.httpClient.post(this.REST_API_SERVER_fr,form);
  }


}
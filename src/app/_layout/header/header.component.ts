import { Component, OnInit ,ViewEncapsulation  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../../service/header.httpservice'; 
import { HomeHttpService } from '../../service/home.httpservice'; 
import { RegisterLoginService } from '../../service/Register-Login.httpservice'; 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'site-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  
  labels:any;
  menus:any;
  HomeList:any;
  Country_List:any;
  Selected_Country:any;
  complexForm: FormGroup;
  RegisterForm: FormGroup;
  LoginForm: FormGroup;
  public country: any = {
   pageLayout: localStorage.getItem('country')
}

  constructor(fb: FormBuilder,public translate: TranslateService,private dataService: DataService,private listService: HomeHttpService,private reg_loginservice: RegisterLoginService) {
    

// initiate form
    this.complexForm = fb.group({
            'mobile': [null, Validators.required],
            'postal': [null, Validators.required]
        });

    this.RegisterForm = fb.group({
            'name': [null, Validators.required],
            'email': [null, Validators.required],
            'password': [null, Validators.required],
            're-password': [null, Validators.required],
        });
    this.LoginForm = fb.group({
            
            'email': [null, Validators.required],
            'password': [null, Validators.required]
        });

    translate.addLangs(['en', 'fr']);  
    if (localStorage.getItem('locale')) {  
      const browserLang = localStorage.getItem('locale');  
      translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');  
    } else {  
      localStorage.setItem('locale', 'en');  
      translate.setDefaultLang('en');  
    }  
  }

  ngOnInit() {
    // console.log(this.Header_list);
    this.Selected_Country=localStorage.getItem('country');
    
    this.listService.sendGetRequest().subscribe((data: any[])=>{
          this.HomeList = data;
    });

    this.getcountries();
    this.changeLang('en');
    
  }

  changeLang(language: string) {  
    localStorage.setItem('locale', language);  
    this.translate.use(language); 

    if(language == 'en'){
        this.dataService.sendGetRequest_en().subscribe((data: any[])=>{
        // console.log(data);
        this.labels = data['2'];
        this.menus = data['3'];
      })
    }else{
        this.dataService.sendGetRequest_fr().subscribe((data: any[])=>{
        // console.log(data);
        this.labels = data['2'];
        this.menus = data['3'];
      })
    } 
    
  } 


  getcountries(){

    this.listService.Countries().subscribe((data: any)=>{
          this.Country_List = data.result;
          
    });
  } 


  Register(value: any){

    let form = value;
    
    this.reg_loginservice.RegisterRequest(form).subscribe((data: any[])=>{
          // this.HomeList = data;
    });

  }


  Login(value: any){

    let form = value;

    this.reg_loginservice.LoginRequest(form).subscribe((data: any[])=>{
          // this.HomeList = data;
    });

  }


  submitForm(value: any) {

  }

}
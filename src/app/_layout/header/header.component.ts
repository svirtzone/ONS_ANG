import { Component, OnInit ,ViewEncapsulation  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../../service/header.httpservice'; 
import { HomeHttpService } from '../../service/home.httpservice'; 
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
  complexForm: FormGroup;

  constructor(fb: FormBuilder,public translate: TranslateService,private dataService: DataService,private listService: HomeHttpService) {
    

// initiate form
    this.complexForm = fb.group({
            'mobile': [null, Validators.required],
            'postal': [null, Validators.required]
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
    this.listService.sendGetRequest().subscribe((data: any[])=>{
          this.HomeList = data;
        });

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


  submitForm(value: any) {

  }

}
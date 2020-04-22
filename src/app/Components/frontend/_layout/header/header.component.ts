import { Component, OnInit ,ViewEncapsulation  } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as HomeActions from '../../../../action/home.action';
import Home from '../../../../model/home.model';
import HomeState from '../../../../state/home.state';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../../../../service/header.httpservice'; 
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
  complexForm: FormGroup;

  constructor(fb: FormBuilder,private store: Store<{ Homes: HomeState }>,public translate: TranslateService,private dataService: DataService) {
    this.Home$ = store.pipe(select('Homes'));

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
    this.HomeSubscription = this.Home$
      .pipe(
        map(x => {
          this.HomeList = x.Homes;
          this.HomeError = x.HomeError;
        })
      )
      .subscribe();

    this.store.dispatch(HomeActions.BeginGetHomeAction());
    this.changeLang('en');
    
  }

  Home$: Observable<HomeState>;
  HomeSubscription: Subscription;
  HomeList: Home[] = [];

  Title: string = '';
  IsCompleted: boolean = false;

  HomeError: Error = null;

  createHome() {
    const Home: Home = { Title: this.Title, IsCompleted: this.IsCompleted };
    this.store.dispatch(HomeActions.BeginCreateHomeAction({ payload: Home }));
    this.Title = '';
    this.IsCompleted = false;
  }

  ngOnDestroy() {
    if (this.HomeSubscription) {
      this.HomeSubscription.unsubscribe();
    }
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
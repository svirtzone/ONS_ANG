import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as HomeActions from '../../../../action/home.action';
import Home from '../../../../model/home.model';
import HomeState from '../../../../state/home.state';
import { TranslateService } from '@ngx-translate/core'; 

@Component({
  selector: 'site-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<{ Homes: HomeState }>,public translate: TranslateService) {
    this.Home$ = store.pipe(select('Homes'));

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
    this.HomeSubscription = this.Home$
      .pipe(
        map(x => {
          this.HomeList = x.Homes;
          this.HomeError = x.HomeError;
        })
      )
      .subscribe();

    this.store.dispatch(HomeActions.BeginGetHomeAction());
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
  }  

}
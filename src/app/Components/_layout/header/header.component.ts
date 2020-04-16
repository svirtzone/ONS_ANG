import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as HomeActions from '../../../action/home.action';
import Home from '../../../model/home.model';
import HomeState from '../../../state/home.state';

@Component({
  selector: 'site-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<{ Homes: HomeState }>) {
    this.Home$ = store.pipe(select('Homes'));
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

}
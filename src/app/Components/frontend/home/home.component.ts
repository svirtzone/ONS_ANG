import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../../../service/content.httpservice'; 
// import * as $ from 'jquery';
@Component({
  selector: 'app-to-do',
  templateUrl: './home.component.html',
  styleUrls: ['../_layout/header/header.component.css']
})
export class HomeComponent implements OnInit {
  Featured:any;
  constructor(private dataService: DataService) {
    
  }

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any[])=>{
          this.Featured = data['recent'];
          // console.log(this.Featured);
        });
  }


  
  
}

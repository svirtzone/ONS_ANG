import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../../../../service/footer.httpservice'; 

@Component({
  selector: 'site-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../header/header.component.css']
})
export class FooterComponent implements OnInit {
  f_data:any;
  constructor(private dataService: DataService) { }

  ngOnInit() {

  	this.dataService.sendGetRequest().subscribe((data: any[])=>{
          this.f_data = data;
        });
  }

}
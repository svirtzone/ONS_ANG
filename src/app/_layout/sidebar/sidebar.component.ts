import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/sidebar/sidebar.httpservice'; 

@Component({
  selector: 'site-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../header/header.component.css']
})
export class SidebarComponent implements OnInit {

  HomeList:any;
  Featured:any;
  Buyer:any;
  Seller:any;
  constructor(private dataService: DataService) {
    
  }

  ngOnInit() {
        
        this.dataService.sendGetRequest().subscribe((data: any[])=>{
          this.Featured = data['1'];
          this.Buyer = data['2'];
          this.Seller = data['3'];
        });

        this.dataService.sendGetRequest_data().subscribe((data: any[])=>{
          this.HomeList = data;
        });

  }

  

 

}
import { Component, OnInit } from '@angular/core';
import { HomeHttpService } from '../service/home.httpservice'; 
import { ActivatedRoute, Router } from '@angular/router';
// import * as $ from 'jquery';
@Component({
  selector: 'app-ons',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  Country_List:any;
  Country_name:any;
  constructor(private dataService: HomeHttpService,private router: Router) {
    
  }

  ngOnInit() {
    this.dataService.Useripinfo().subscribe((data: any[])=>{
          
          // this.Country_name=data.country;
          this.Country_name=data;

    });

    setTimeout(()=>{    
      this.is_exist(this.Country_name);
    }, 500);

  }

  is_exist(country){

    this.dataService.Countries().subscribe((data: any)=>{
          this.Country_List = data.result;
          console.log(this.Country_List);

          var isPresent = this.Country_List.some(function(el){ return el.name === country});
          if(isPresent == true){
            localStorage.setItem('country',country);
            this.router.navigate(['/home'])
          }
          
    });
  }

  home(country_name){
    localStorage.setItem('country',country_name);
    this.router.navigate(['/home']);
  }


  
  
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products : any[];

  constructor(public apiService: ApiService) { 
   if( this.products)
    {console.log("products length is ", this.products.length)}
  }

  ngOnInit() {

    this.apiService.get().subscribe( (data: any[])=>{
      console.log(`data are :${data}`);
      this.products = data;
    })
    
  }

}
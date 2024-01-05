import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list:any[]=[];
  getProduct:any[] =[];
  constructor(private _ProductsService:ProductsService) {
    _ProductsService.getProducts().subscribe((response)=>{
    this.list = response;
  });
  _ProductsService.getProducts().subscribe((response)=>{
    this.getProduct = response;
    // this.describtions = response.description.split(" " ,10).join(" ");
  })
   }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    margin:10,
    
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
  ngOnInit(): void {
  }



 
  
}

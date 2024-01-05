import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  getProduct:any[] =[];
  // describtions:string ='';

  constructor(private _ProductsService:ProductsService) { 
    _ProductsService.getProducts().subscribe((response)=>{
      this.getProduct = response;
      // this.describtions = response.description.split(" " ,10).join(" ");
    })
  }

  

  ngOnInit(): void {
  }

}

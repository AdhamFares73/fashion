import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  id:string='';
  details:any ;
  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService) {
    this.id= _ActivatedRoute.snapshot.params['id'];
    this._ProductsService.getProductsDetails(this.id).subscribe((response)=>{
      this.details =response;
     
    })
   }

 

  ngOnInit(): void {
  }

}

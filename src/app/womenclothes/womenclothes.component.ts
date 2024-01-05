import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-womenclothes',
  templateUrl: './womenclothes.component.html',
  styleUrls: ['./womenclothes.component.scss']
})
export class WomenclothesComponent implements OnInit {

  womenClothes:any[]=[];
  constructor(private _ApiService:ApiService) { 
    _ApiService.getWomenClothes().subscribe((response)=>{
      this.womenClothes =response.slice(0,6);
    })
  }

  ngOnInit(): void {
  }

}

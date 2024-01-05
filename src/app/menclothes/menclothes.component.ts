import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-menclothes',
  templateUrl: './menclothes.component.html',
  styleUrls: ['./menclothes.component.scss']
})
export class MenclothesComponent implements OnInit {

  manClothes:any[]=[];
  constructor(private _ApiService:ApiService) { 
    _ApiService.getMenClothes().subscribe((response)=>{
      this.manClothes =response;
    })
  }

  ngOnInit(): void {
  }

}

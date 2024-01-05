import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.scss']
})
export class JeweleryComponent implements OnInit {

  jeweleryData:any[] =[]
  constructor(private _ApiService:ApiService) { 
    _ApiService.getCategories('jewelery').subscribe((response)=>{
      this.jeweleryData = response;
    })
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {

  electronicData:any[] =[];
  constructor(private _ApiService:ApiService) {
    _ApiService.getCategories('electronics').subscribe((response)=>{
      this.electronicData = response;
    })
   }

  ngOnInit(): void {
  }

}

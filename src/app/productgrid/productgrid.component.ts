import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../newproduct/product';

@Component({
  selector: 'app-productgrid',
  templateUrl: './productgrid.component.html',
  styleUrls: ['./productgrid.component.css']
})
export class ProductgridComponent implements OnInit {

  product :any ;
  term:any;
  

  getProdData(){

    this.dataservice.getProdData().subscribe((res)=>{

      this.product = res

    })
  }

  pid:number;
  num:number;

   lessthan(pid,num){
    console.log(pid+" "+num);
    if(pid < num)
    { 

      console.log("true");
      return true;
    }
    else
    { 
      console.log("false");
      return false;
    }


  }

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {

    this.getProdData();

  }

}

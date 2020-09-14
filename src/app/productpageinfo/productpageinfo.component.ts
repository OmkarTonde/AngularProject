import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-productpageinfo',
  templateUrl: './productpageinfo.component.html',
  styleUrls: ['./productpageinfo.component.css']
})
export class ProductpageinfoComponent implements OnInit {

  product :any ;
  term:any;

  getProdData(){

    this.dataservice.getProdData().subscribe((res)=>{

      this.product = res

    })
  }

  proddelete(pid){

    this.dataservice.deleteProdData(pid).subscribe((res)=>{

      this.dataservice.showSuccess("Product deleted successfully....." ,"Deleted");

    this.getProdData()


  })

}

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {

    
    this.getProdData();

  }

}

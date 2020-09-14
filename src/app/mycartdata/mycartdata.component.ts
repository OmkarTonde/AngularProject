import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-mycartdata',
  templateUrl: './mycartdata.component.html',
  styleUrls: ['./mycartdata.component.css']
})
export class MycartdataComponent implements OnInit {

  form : FormGroup;

  product : any ;

  id:number;

  qnt:number =1;

  constructor(private dataservice:DataService,private activatedrouter:ActivatedRoute,private router:Router) { }

  proddelete()
  { 
    
    this.dataservice.showSuccess("Removed Succcessfully","Cart is Empty");
    this.router.navigateByUrl("grid");
  }

  Total(qty,p)
  {
    console.log(qty,p);
    this.dataservice.showSuccess(qty*p,"Total amount is");

  }

  confirm()
  {

    this.dataservice.showInfo("Your order is confirmed and will be delivered in 4-5 business days","Thank you");


  }


  
  ngOnInit(): void {

    this.activatedrouter.params.subscribe((param)=>{

       

      this.id = param["id"];
      console.log(this.id);

      this.dataservice.getProdDataById(this.id).subscribe((data)=>{

        this.product = data;

        console.log(this.product);
      })

    })

   

  }
}

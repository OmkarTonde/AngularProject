import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import {Product} from './product'
import { Router } from '@angular/router';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  form:FormGroup;

  product : any = [];
 
 
  constructor(private dataservice:DataService,private router:Router) { }

  add(){

    console.log(this.form.value);

    this.dataservice.saveProd(this.form.value).subscribe((res)=>{
    
      this.dataservice.showInfo("Product saved successfully","");

      this.router.navigateByUrl("prodgrid");


      
  })

  }


  ngOnInit(): void {

    this.form = new FormGroup({

      prod_imgpath : new FormControl(""),
      prod_imgname : new FormControl(""),
      prod_imgdesc : new FormControl(""),
      prod_review : new FormControl(""),
      prod_size : new FormControl(""),
      prod_price : new FormControl(""),
      prod_offerprice : new FormControl("")

    })

  }

}

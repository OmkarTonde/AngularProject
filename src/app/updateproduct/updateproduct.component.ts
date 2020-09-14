import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  form : FormGroup;

  product : any =[]

  getProdData(){


      this.dataservice.getProdData().subscribe((res)=>{

        this.product = res


      })

  }

  id:number;

  constructor(private dataservice:DataService,private activatedrouter:ActivatedRoute,private router:Router) { }

  update(){

    this.dataservice.updateProdData(this.id,this.form.value).subscribe((res)=>{

      this.dataservice.showSuccess("Product updated successfully....." ,"Updated");

      this.router.navigateByUrl("prodinfo");

    })

  }
  
  ngOnInit(): void {

    this.activatedrouter.params.subscribe((param)=>{this.id= param["id"]
  
    this.id = param["id"];

    this.dataservice.getProdDataById(this.id).subscribe((data)=>{

      this.product = data ;

      this.form = new FormGroup({

        prod_imgpath : new FormControl(this.product.prod_imgpath ),
        prod_imgname : new FormControl(this.product. prod_imgname),
        prod_imgdesc : new FormControl(this.product. prod_imgdesc),
        prod_review : new FormControl(this.product.prod_review ),
        prod_size : new FormControl(this.product.prod_size),
        prod_price : new FormControl(this.product.prod_price ),
        prod_offerprice : new FormControl(this.product.prod_offerprice )





      })

    })
  
  
  })


  }

}

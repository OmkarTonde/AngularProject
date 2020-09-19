import { Component, OnInit } from '@angular/core';
import { FormGroup, NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  user : any;
  form : FormGroup ;
  id:Number;
  

  constructor(private dataservice:DataService,private activatedrouter:ActivatedRoute,private router:Router) { }



  Remove(id){

      this.dataservice.deleteData(id).subscribe((res)=>{

        alert("Data deleted Successfully")

    })

  }

  ngOnInit(): void {

    this.activatedrouter.params.subscribe((param)=>{this.id = param["p1"]
  
      this.id = param["p1"]
      console.log(this.id);
     this.dataservice.getDataById(this.id).subscribe((data)=>{

      this.user= data
      console.log(this.user);
     })
    })
  }

}

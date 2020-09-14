import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl } from '@angular/forms'
import { DataService } from '../data.service';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  form : FormGroup ;
  
  user : any = [];


  getUserData(){

    this.dataservice.getData().subscribe((res)=>{

      this.user = res

    })

  }

  id :number;

  location : string[] = ["Maharashtra","Gujrat","Punjab","Delhi","Karntaka"];

  constructor(private dataservice:DataService,private activatedrouter:ActivatedRoute,private router:Router) { }

  update(){

    this.dataservice.updateData(this.id,this.form.value).subscribe((res)=>{

    this.dataservice.showSuccess("Data updated successfully","");

    this.router.navigateByUrl("/userinfo");

    })

  }

  ngOnInit(): void {  

    this.activatedrouter.params.subscribe((param)=>{this.id = param["id"]
    
      this.id = param["id"]

     this.dataservice.getDataById(this.id).subscribe((data)=>{

      this.user= data
        
    this.form = new FormGroup({

      user_name : new FormControl(this.user.user_name),
      user_password : new FormControl(this.user.user_password),
      user_email : new FormControl(this.user.user_email),
      user_number : new FormControl(this.user.user_number),   
      user_location: new FormControl(this.user.user_location), 


     })
    
  
  
    })


  })

}

}
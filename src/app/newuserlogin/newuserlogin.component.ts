import { Component, OnInit } from '@angular/core';
import{User} from './user';
import{FormGroup,FormControl,Validators} from '@angular/forms'
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newuserlogin',
  templateUrl: './newuserlogin.component.html',
  styleUrls: ['./newuserlogin.component.css']
})
export class NewuserloginComponent implements OnInit {

  
  form :FormGroup;  

  user : any = [];

  location : string[] = ["Maharashtra","Gujrat","Punjab","Delhi","Karntaka"];

  constructor(private dataservice:DataService,private router:Router) { }

  register(){

    console.log(this.form.value)
   // console.log(this.user.push(this.form.value))

   this.dataservice.saveData(this.form.value).subscribe((res)=>{

    this.dataservice.showInfo("You have successfully registerd","Thank you");
    this.router.navigateByUrl("prod");


   })

  }

  ngOnInit(): void {
    
        
    this.form = new FormGroup({

      user_name:new FormControl("",[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      user_password: new FormControl("",[Validators.required]),
      user_email:new FormControl("",[Validators.required]),
      user_number:new FormControl("",[Validators.required]),
      user_location:new FormControl(this.location[1]),

     })




  }

}

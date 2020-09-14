import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl } from '@angular/forms'
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations';



@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  form :FormGroup;  

  // olduser_name :string;
  // olduser_password:string;
  

  user :any;

  i:number= 0;
  count:number = 0;

  getUserData()
  {

    this.dataservice.getData().subscribe((res)=>{

      this.user = res

    })

  }


  constructor(private dataservice:DataService,private router:Router) { }

  register(){

  console.log(this.form.value);
  
  
    for(this.i=0 ; this.i< this.user.length; this.i++)
    { 
        
        if (this.form.value.olduser_name == this.user[this.i].user_name && this.form.value.olduser_password == this.user[this.i].user_password && this.user[this.i].user_name!=0 )
        {
          this.router.navigateByUrl("prod");
          
          this.dataservice.showSuccess("Logged in successfully.....","Welcome "+this.user[this.i].user_name );
         // alert("Logged in successfully.....\nWelcome, " +this.user[this.i].user_name);
          this.count=1; 
        }

      }
       if(this.form.value.olduser_name == "admin" && this.form.value.olduser_password == "admin@123")
        { 
          this.router.navigateByUrl("admin");
          this.dataservice.showSuccess("Logged in successfully....." ,"Welcome,Admin");
          //alert("Logged in successfully.....\nWelcome,Admin"); 
          this.count=1;
        }

    
        if(this.count==0){

          this.dataservice.showError("Please enter username and password  "," ");
        
        }
       
}
  


  ngOnInit() {

    this.getUserData();

    this.form = new FormGroup({

      olduser_name:new FormControl(""),
      olduser_password:new FormControl(""),

    })
   
  } 



}

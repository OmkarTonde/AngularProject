import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  term:any;
  

  constructor(private router:Router,private dataservice:DataService) {}

  logout()
  {

    this.dataservice.showInfo("You have logged out from the website thank you for visiting !!!!"," ");
    this.router.navigateByUrl("reg");
    


  }



}

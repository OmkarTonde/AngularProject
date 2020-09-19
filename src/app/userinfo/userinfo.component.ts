import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  user : any = [];
  term:any;
  

  

  constructor(private dataservice:DataService) { }

  getUserData(){

    this.dataservice.getData().subscribe((res)=>{

      this.user = res

    })
  }


  delete(id){

      this.dataservice.deleteData(id).subscribe((res)=>{

      this.dataservice.showSuccess("Data deleted Successfully","");

      this.getUserData()


    })

  }

  ngOnInit(): void {

    this.getUserData();
  }

}

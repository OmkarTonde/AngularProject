import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{ToastrService} from 'ngx-toastr'
import { TitleCasePipe } from '@angular/common';

const api = "http://localhost:8888/user/" 
const api2 = "http://localhost:7777/product/" 


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private httpclient:HttpClient,private toastr:ToastrService) { }

  saveData(data){
  
    return this.httpclient.post(api,data)
  }

  getData(){

    return  this.httpclient.get(api)
  
  }

  updateData(id,data){

    return this.httpclient.put(api+id,data)
  
  }

  getDataById(id){

    return this.httpclient.get(api+id);
  
  }

  deleteData(id){

    return this.httpclient.delete(api+id);

  }

  //-------------------------Product----------------------------------

  saveProd(data)
  {
    return this.httpclient.post(api2,data);
  }

  getProdData(){

    return  this.httpclient.get(api2);
  
  }

  updateProdData(id,data){

    return this.httpclient.put(api2+id,data)
  
  }

  getProdDataById(id){

    return this.httpclient.get(api2+id);
  
  }

  deleteProdData(id){

    return this.httpclient.delete(api2+id);

  }

  showSuccess(message,title){

    this.toastr.success(message,title);

  }

  showError(message,title){

    this.toastr.error(message,title);

  }

  showInfo(message,title){

    this.toastr.info(message,title);

  }
  
}

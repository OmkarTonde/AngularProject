import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { NewuserloginComponent } from './newuserlogin/newuserlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductpageComponent } from './productpage/productpage.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';


import { NewproductComponent } from './newproduct/newproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ProductpageinfoComponent } from './productpageinfo/productpageinfo.component';
import { ProductgridComponent } from './productgrid/productgrid.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { MycartdataComponent } from './mycartdata/mycartdata.component';

import{ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ CarouselModule} from 'ngx-bootstrap/carousel';
import { HomepageComponent } from './homepage/homepage.component';
import { InformationComponent } from './information/information.component'
import{Ng2SearchPipeModule} from 'ng2-search-filter';
import { MyaccountComponent } from './myaccount/myaccount.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    NewuserloginComponent,
    ProductpageComponent,
    UserinfoComponent,
    UpdateuserComponent,
   
  
    NewproductComponent,
    UpdateproductComponent,
    ProductpageinfoComponent,
    ProductgridComponent,
    AdminpageComponent,
    MycartdataComponent,
   
    HomepageComponent,
   
    InformationComponent,
   
    MyaccountComponent,
   
  
  
      
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CarouselModule.forRoot(),
    Ng2SearchPipeModule,
  

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginformComponent} from './loginform/loginform.component';
import { NewuserloginComponent } from './newuserlogin/newuserlogin.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AppComponent } from './app.component';
import { ProductpageComponent } from './productpage/productpage.component';

import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ProductpageinfoComponent } from './productpageinfo/productpageinfo.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { ProductgridComponent } from './productgrid/productgrid.component';
import { MycartdataComponent } from './mycartdata/mycartdata.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InformationComponent } from './information/information.component';
import { MyaccountComponent } from './myaccount/myaccount.component';

const routes: Routes = [
  {path:"", component:HomepageComponent},
{path:"home", component:HomepageComponent},
{path:"reg",component:LoginformComponent},
{path:"new",component:NewuserloginComponent},
{path:"admin",component:AdminpageComponent},
{path:"update/:id",component:UpdateuserComponent},
{path:"prod",component:ProductpageComponent},
{path:"grid",component:ProductgridComponent},
{path:"updateImg/:id",component:UpdateproductComponent},
{path:"newprod",component:NewproductComponent},
{path:"prodgrid",component:ProductgridComponent},
{path:"updprod",component:UpdateproductComponent},
{path:"prodinfo",component:ProductpageinfoComponent},
{path:"upduser",component:UpdateuserComponent},
{path:"userinfo",component:UserinfoComponent},
{path:"mycart",component:MycartdataComponent},
{path:"cartadd/:id",component:MycartdataComponent},
{path:"info",component:InformationComponent},
{path:"myaccount",component:MyaccountComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

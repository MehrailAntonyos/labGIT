import {  createComponent, NgModule} from "@angular/core";
import {  RouterModule,Routes} from "@angular/router";
import { CreateProductComponent } from "./component/create-product/create-product.component";
import { CreateStudentComponent } from "./component/create-student/create-student.component";
import { StudentListComponent } from "./component/student-list/student-list.component";
import { DashbourdLayoutComponent } from "./component/dashbourd-layout/dashbourd-layout.component";
import { DashbourdComponent } from "./component/dashbourd/dashbourd.component";
import { HomeComponent } from "./component/home/home.component";
import { MainLayoutComponent } from "./component/main-layout/main-layout.component";
import { NotfoundComponent } from "./component/notfound/notfound.component";
import { ProductDetailsComponent } from "./component/product-details/product-details.component";
import { ProductParentComponent } from "./component/product-parent/product-parent.component";
import { ProductlistComponent } from "./component/productlist/productlist.component";
// import { CreateStudentComponent } from './component/create-student/create-student.component';

let routes:Routes=[
    {path:'',component:MainLayoutComponent,
    children:[
        
        {path :"",redirectTo:"/home",pathMatch:"full"},
        {path:"home",component:HomeComponent},
        {path:'product',component:ProductParentComponent},
        {path:'product/:pid',component:ProductDetailsComponent},
        {path:'studentApi', component:CreateStudentComponent},
        {path:'studentApi', component:StudentListComponent},
    ]},
    {path:'dashbourd',component:DashbourdLayoutComponent,
    children:[
        
        // {path :"dashbourd",redirectTo:"/dashbourd/home",pathMatch:"full"},
        {path:"home",component:DashbourdComponent},
        {path:'create',component:CreateProductComponent},
        {path:'product',component:ProductlistComponent},
        {path:'studentApi', component:StudentListComponent},
    ]},

    {path:'**',component:NotfoundComponent},
    
]


@NgModule(
    {
        exports:[RouterModule],
        imports:[RouterModule.forRoot(routes)]
    }
)
export class AppRoutingModule{

}
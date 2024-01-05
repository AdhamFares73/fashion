import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ApigGuard } from './apig.guard';
import { CategoryComponent } from './category/category.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeComponent } from './home/home.component';
import { JeweleryComponent } from './jewelery/jewelery.component';
import { LoginComponent } from './login/login.component';
import { MenclothesComponent } from './menclothes/menclothes.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { WomenclothesComponent } from './womenclothes/womenclothes.component';

const routes: Routes = [
  {path:'' ,redirectTo :"home" , pathMatch:"full"},
  {path:"home" , canActivate : [ApigGuard], component : HomeComponent},
  {path:"about", canActivate : [ApigGuard], component : AboutComponent},
  {path:"category", canActivate : [ApigGuard], component : CategoryComponent},
  {path:"womenclothes", canActivate : [ApigGuard], component : WomenclothesComponent},
  {path:"menclothes", canActivate : [ApigGuard], component : MenclothesComponent},
  {path:"electronics", canActivate : [ApigGuard], component : ElectronicsComponent},
  {path:"jewelery", canActivate : [ApigGuard], component : JeweleryComponent},
  {path:"login" , component : LoginComponent},
  {path:"register" , component : RegisterComponent},
  {path:"products", canActivate : [ApigGuard] , component : ProductsComponent},
  {path:"productdetails/:id", canActivate : [ApigGuard] , component : ProductdetailsComponent},
  {path:"**" , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

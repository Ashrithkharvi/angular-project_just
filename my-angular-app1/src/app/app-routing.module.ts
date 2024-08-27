import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DestopComponent } from './components/destop/destop.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {
  path:'login',
  component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'destop',
    component: DestopComponent
  },
  {
    path:'',redirectTo:'destop',pathMatch:'full'
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

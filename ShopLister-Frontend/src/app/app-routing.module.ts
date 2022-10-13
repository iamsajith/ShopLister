import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './home/products/products.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AUTH_ROUTES } from './shared/routes/auth.routes';

const routes: Routes = [
  {
    path:"auth",
    component:AuthLayoutComponent,
    children:AUTH_ROUTES
  },
  {path:"",
  component:ProductsComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

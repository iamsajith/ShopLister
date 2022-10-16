import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsInfoComponent } from './home/products-info/products-info.component';
import { ProductsComponent } from './home/products/products.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/auth.guard';
import { AUTH_ROUTES } from './shared/routes/auth.routes';

const routes: Routes = [
  {
    path:"auth",
    component:AuthLayoutComponent,
    children:AUTH_ROUTES
  },
  {path:"",
  canActivate:[AuthGuard],
  component:ProductsComponent
},
    {path:"view/:id",
    canActivate:[AuthGuard],
    component:ProductsInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

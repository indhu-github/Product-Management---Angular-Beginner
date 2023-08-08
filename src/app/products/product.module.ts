import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { ConvertToSpaces } from '../shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpaces
  ],
  imports: [
    RouterModule.forChild([
      {path:'products',component:ProductListComponent},
      {path:'products/:id',
      canActivate:[ProductDetailGuard],
      component:ProductDetailComponent},
      ]),  // forChild() method is used since 
      //it is a feature module and routes available to the
      //child modules
    SharedModule
  ]
})
export class ProductModule { }

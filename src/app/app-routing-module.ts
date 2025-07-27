import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './components/product-page/product.page.component';

const routes: Routes = [
  { path: '', redirectTo: '/product/samsung-galaxy-a55-5g', pathMatch: 'full' },
  { path: 'product/:id', component: ProductPageComponent },
  { path: '**', redirectTo: '/product/samsung-galaxy-a55-5g' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
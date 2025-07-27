import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './components/product-page/product.page.component';

const routes: Routes = [
  { path: '', redirectTo: '/product/ML1', pathMatch: 'full' },
  { path: 'product/:id', component: ProductPageComponent },
  { path: '**', redirectTo: '/product/ML1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
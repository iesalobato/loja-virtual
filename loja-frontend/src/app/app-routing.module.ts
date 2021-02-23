import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreComponent } from './views/store/store.component';
import { ProductsComponent } from './views/products/products.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';

const routes: Routes = [
  { path: "", component: StoreComponent },
  { path: "products", component: ProductsComponent },
  { path: "products/new", component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

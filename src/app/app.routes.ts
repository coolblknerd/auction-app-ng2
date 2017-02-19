import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'products/:productId', component: ProductDetailComponent }
]

export const routing = RouterModule.forRoot(routes);

import { Component, Input } from '@angular/core';
import { StarsComponent } from '../stars/stars';
import { Product } from '../../services/product-service.service';

@Component({
	selector: 'auction-product-item',
	templateUrl: './product-item.html'
	})

export class ProductItemComponent {
	@Input() product: Product;
}

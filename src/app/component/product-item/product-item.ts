import { Component, Input } from '@angular/core';
import { Product } from '../../services/product-service.service';

@Component({
	selector: 'auction-product-item',
	templateUrl: './product-item.html',
	styleUrls: ['./product-item.css']
	})

export class ProductItemComponent {
	@Input() product: Product;
}

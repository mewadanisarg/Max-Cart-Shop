import { Component, Input } from '@angular/core';
import { Product } from '../../../Models/Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  // Using @Input decorator to pass data from parent component to child component
  @Input()
  product: Product;
}

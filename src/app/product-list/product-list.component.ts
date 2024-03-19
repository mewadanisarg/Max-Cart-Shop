import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  // name = 'John Doe';
  addToCart: number = 0;
  product = {
    name: 'iPhone 16',
    price: 999,
    color: 'black',
    discount: 8.5,
    inStock: 5,
    image: '/assets/iPhone 16.jpg',
  };

  getDiscountedPrice() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }
  decrementCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }
  incrementCartValue() {
    if (this.addToCart < this.product.inStock) {
      this.addToCart++;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string; 
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [
    { id: 1, name: 'shoes', description: 'JUST NOW New product', price: 999, imageUrl: 'assets/image15.jfif' },
    { id: 2, name: 'I phone', description: 'THIS IS THE NEW VERSION', price: 129999, imageUrl: 'assets/image10.jfif' },
    { id: 3, name: 'BAT', description: 'MRF PRO BAT', price: 4999, imageUrl: 'assets/image14.jfif' },
    { id: 4, name: 'BHAGAVATH GEETE', description: 'BOOK', price: 699, imageUrl: 'assets/image11.jfif' },
    { id: 5, name: 'BAG', description: 'LAPTOP BAG', price: 1999, imageUrl: 'assets/image12.jfif' },
    { id: 6, name: 'LAPTOP', description: 'BAY THE LAPTOP BAG AND MOUSE ARE FREE', price: 89899, imageUrl: 'assets/image13.jfif' }
  ];

  cartForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cartForm = this.fb.group({
      quantity: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {}

  addToCart(product: Product): void {
    if (this.cartForm.valid) {
      const quantity = this.cartForm.get('quantity')?.value;
      console.log(`Added ${quantity} of ${product.name} to cart.`);
      
    } else {
      console.log('Form is invalid');
    }
  }
}

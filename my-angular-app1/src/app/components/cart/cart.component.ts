import { Component, OnInit } from '@angular/core';

interface CartItem {
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [
    { name: 'BAG', price: 2999, image: 'assets/image12.jfif' },
    { name: 'LAPTOP', price: 83999, image: 'assets/image13.jfif' },
    { name: 'BAT', price: 4999, image: 'assets/image14.jfif' }
  ];

  get totalPrice(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  ngOnInit(): void {
  }

  removeFromCart(item: CartItem): void {
    this.cartItems = this.cartItems.filter(i => i !== item);
  }
}

import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name:'',
    address:''
  });
  
  clearCart() {
    
    this.items = this.cartService.clearCart();
    window.alert('Your cart is empty');
    
  }

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    ) {}
    onSubmit(): void {
      //Process checkout data here
      this.clearCart();
      console.warn('Your order has been submitted', this.checkoutForm.value);
      this.checkoutForm.reset();
      }

  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productName: string = '';
  products = ['a boat'];
  isDisabled = true;

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 2000);
  }

   onAddProduct() {
    this.products.push(this.productName);
   }

  ngOnInit(): void {
  }

}

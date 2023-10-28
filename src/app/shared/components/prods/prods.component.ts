import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproducts } from '../../models/products';

@Component({
  selector: 'app-prods',
  templateUrl: './prods.component.html',
  styleUrls: ['./prods.component.scss']
})
export class ProdsComponent implements OnInit {

  productsArray : Array<Iproducts> = []; 
  constructor(private _productService : ProductsService) { }

  ngOnInit(): void {
   this.productsArray = this._productService.getAllProducts()

  }

}

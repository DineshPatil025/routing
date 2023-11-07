import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproducts } from '../../models/products';
import { ActivatedRoute, Params, ROUTES, Router } from '@angular/router';

@Component({
  selector: 'app-prods',
  templateUrl: './prods.component.html',
  styleUrls: ['./prods.component.scss']
})
export class ProdsComponent implements OnInit {

  productsArray: Array<Iproducts> = [];
  isProdAcive: boolean = false;
  actProdId !: string;
  // private _actRoute = inject(ActivatedRoute)
  private _router = inject(Router)

  constructor(private _productService: ProductsService, private _actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productsArray = this._productService.getAllProducts()

    this._router.navigate(['prods/1'])

  }

  getProdId() {
    console.log("li clicked");

    // this.actProdId = this._actRoute.snapshot.params['prodsId']
    // console.log(this._actRoute.snapshot.params);

    // console.log(this.actProdId);

    // this.isProdAcive = true;
    this._actRoute.params.subscribe((param: Params) => {
      console.log(param);
      this.actProdId = param['prodsId']
      console.log(this.actProdId);
    })





  }

}

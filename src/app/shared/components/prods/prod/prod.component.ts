import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproducts } from 'src/app/shared/models/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.scss']
})
export class ProdComponent implements OnInit {

  prodId !: string;
  singleProd !: Iproducts;


  constructor(private _prodsService: ProductsService, private _routing: ActivatedRoute) { }

  ngOnInit(): void {
    this._routing.params.subscribe((param: Params) => {
      this.prodId = param['prodsId']
      console.log(this.prodId);
      
      this.singleProd = this._prodsService.getSingleProd(this.prodId)
      
    })
  }




}

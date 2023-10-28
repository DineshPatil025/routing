import { Injectable } from '@angular/core';
import { Iproducts } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsArray : Array<Iproducts> = [
    {
      pName: 'Samsung M31',
      pId: '1',
      pStatus: 'In Progress',
      canReturn : 1
    },
    {
      pName: 'Samsung TV LED',
      pId: '2',
      pStatus: 'Dispathched',
      canReturn : 1
    },
    {
      pName: 'Iphone 14',
      pId: '3',
      pStatus: 'In Progress',
      canReturn : 0
    },
    {
      pName: 'Sony Headphone',
      pId: '4',
      pStatus: 'Delevered',
      canReturn : 0
    },
  ];


  constructor() { }


  getAllProducts(){
    return this.productsArray;
  }

  getSingleProd(id : string) : Iproducts{
    return this.productsArray.find(prod => prod.pId === id)!
  }
}

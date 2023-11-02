import { Injectable } from '@angular/core';
import { Iproducts } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsArray: Array<Iproducts> = [
    {
      pName: 'Samsung M31',
      pId: '1',
      pStatus: 'inprogress',
      canReturn: 1
    },
    {
      pName: 'Samsung TV LED',
      pId: '2',
      pStatus: 'dispatched',
      canReturn: 1
    },
    {
      pName: 'Iphone 14',
      pId: '3',
      pStatus: 'inprogress',
      canReturn: 0
    },
    {
      pName: 'Sony Headphone',
      pId: '4',
      pStatus: 'delivered',
      canReturn: 0
    },
  ];


  constructor() { }


  getAllProducts() {
    return this.productsArray;
  }

  getSingleProd(id: string): Iproducts {
    return this.productsArray.find(prod => prod.pId === id)!
  }

  addNewProd(newProdObj: Iproducts) {
    this.productsArray.push(newProdObj)
  }

  updateSingleProd(updateProdObj : Iproducts){
    console.log(updateProdObj);
    
    let getIndex = this.productsArray.findIndex(user => user.pId === updateProdObj.pId)
    console.log(getIndex);
    
    this.productsArray[getIndex].pName = updateProdObj.pName;
    this.productsArray[getIndex].pStatus = updateProdObj.pStatus;
    console.log(this.productsArray);
    

  }
}

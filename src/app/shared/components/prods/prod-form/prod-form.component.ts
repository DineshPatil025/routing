import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproducts } from 'src/app/shared/models/products';
import { ProductsService } from 'src/app/shared/services/products.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { SweetAlertService } from 'src/app/shared/services/sweet-alert.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.scss']
})
export class ProdFormComponent implements OnInit {

  prodForm !: FormGroup;
  newProdObj !: Iproducts;
  inEditMode: boolean = false;
  editProdObj !: Iproducts
  editId !: string;
  updateProdObj !: Iproducts;
  canEditState !: number;

  private _uuid = inject(UuidService);
  private _prodService = inject(ProductsService);
  private _snackbarService = inject(SnackbarService);
  private _actroute = inject(ActivatedRoute);
  private _swal = inject(SweetAlertService)


  constructor(private _route: Router) { }

  ngOnInit(): void {
    this.createProdForm()

    this.patchProdForm()

    this._actroute.queryParams.subscribe((param: Params) => {
      this.canEditState = +param['canEdit']
      console.log(this.canEditState);

      if (!this.canEditState && this.inEditMode) {
        this.prodForm.disable();
        this._snackbarService.openSnackBar('cannot edit the product as it is non returnable', 'close')
      } else {
        this.prodForm.enable();
      }
    })
  }

  patchProdForm() {
    this._actroute.params.subscribe((param: Params) => {
      this.editId = param['prodsId']
      if (this.editId) {
        this.inEditMode = true;
        this.editProdObj = this._prodService.getSingleProd(this.editId);
        this.prodForm.patchValue(this.editProdObj)
      }

    })
  }

  createProdForm() {
    this.prodForm = new FormGroup({
      pName: new FormControl(null, [Validators.required]),
      pStatus: new FormControl(null, [Validators.required])
    })
  }

  onNewProdAdd() {
    if (this.prodForm.valid) {
      console.log("update clicked");

      let canReturn = Math.random() > 0.3 ? 1 : 0;

      this.newProdObj = { ...this.prodForm.value, pId: this._uuid.uuid(), canReturn: canReturn };
      console.log(this.newProdObj);

      this._prodService.addNewProd(this.newProdObj)
      this._snackbarService.openSnackBar(`New Product ${this.newProdObj.pName} added succesfully`, 'close')
      this.prodForm.reset();
      this._route.navigate([`home/prods/${this.newProdObj.pId}`])
    }
    else {
      this._snackbarService.openSnackBar(`Add product name and status`, 'close')
      this._swal.swalWarn()
    }

  }

  onProdUpd() {

    if (this.prodForm.valid && this.canEditState) {


      this.updateProdObj = { ...this.prodForm.value, pId: this.editId };
      console.log(this.updateProdObj);

      this._prodService.updateSingleProd(this.updateProdObj)
      console.log(this.newProdObj.pId);
      
      this._route.navigate([`home/prods/${this.newProdObj.pId}`])
      this.prodForm.reset();
      this._snackbarService.openSnackBar('Product Updated Succesfully', 'close')
    }

  }

}

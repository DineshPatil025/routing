import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';


let matArr = [
  MatButtonModule,
  MatSnackBarModule

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...matArr
  ],
  exports: [
    ...matArr

  ]
})
export class MaterialModule { }

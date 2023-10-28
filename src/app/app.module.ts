import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ProdsComponent } from './shared/components/prods/prods.component';
import { UsersComponent } from './shared/components/users/users.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProdComponent } from './shared/components/prods/prod/prod.component';
import { UserComponent } from './shared/components/users/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdsComponent,
    UsersComponent,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProdComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

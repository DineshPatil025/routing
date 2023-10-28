import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProdsComponent } from "./shared/components/prods/prods.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { HomeComponent } from "./shared/components/home/home.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { ProdComponent } from "./shared/components/prods/prod/prod.component";
import { UserComponent } from "./shared/components/users/user/user.component";





const appRoute : Routes = [
    {
        path: "",
        component : HomeComponent
    },
    {
        path: "prods",
        component: ProdsComponent
    },
    {
        path: "prods/:prodsId",
        component: ProdComponent
    },
    {
        path: "users",
        component: UsersComponent
    },    
    {
        path: "users/:userId",
        component: UserComponent
    },
    {
        path: "page-not-found",
        component: PageNotFoundComponent
    },
    // {
    //     path: '**',
    //     redirectTo: "page-not-found"
    // }
]


@NgModule(
    {
        imports:[RouterModule.forRoot(appRoute)],
        exports:[RouterModule]
    }
)

export class AppRoutingModule{

}
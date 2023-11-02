import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProdsComponent } from "./shared/components/prods/prods.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { HomeComponent } from "./shared/components/home/home.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { ProdComponent } from "./shared/components/prods/prod/prod.component";
import { UserComponent } from "./shared/components/users/user/user.component";
import { UserFormComponent } from "./shared/components/users/user-form/user-form.component";
import { ProdFormComponent } from "./shared/components/prods/prod-form/prod-form.component";





const appRoute : Routes = [
    {
        path: "",
        component : HomeComponent
    },
    {
        path: "prods",
        component: ProdsComponent,
        children : [
            {
                path: 'add-prod',
                component:ProdFormComponent
            },
            {
                path: ":prodsId",
                component: ProdComponent
            },
            {
                path: ":prodsId/edit",
                component: ProdFormComponent
            }
        ]

    },
   
  
    {
        path: "users",
        component: UsersComponent,
        children: [
            {
                path:'add-user',
                component:UserFormComponent
            },  
            {
                path:":userId",
                component: UserComponent
            }, 
            
            {
                path:":userId/edit",
                component: UserFormComponent
            }
        ]
    }, 
    // {
    //     path:'users/add-user',
    //     component:UserFormComponent
    // },  
    // {
    //     path:"users/:userId",
    //     component: UserComponent
    // }, 
    
    // {
    //     path:"users/:userId/edit",
    //     component: UserFormComponent
    // }

    // {
    //     path: "page-not-found",
    //     component: PageNotFoundComponent
    // },
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
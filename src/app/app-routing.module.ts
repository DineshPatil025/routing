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
import { AuthGuardService } from "./shared/services/auth-guard.service";
import { AuthComponent } from "./shared/components/auth/auth.component";
import { UserRoleGuard } from "./shared/services/user-role.guard";





const appRoute: Routes = [
    {
        path: "",
        component: AuthComponent,
        title: "Log In"
    },
    {
        path: "home",
        component: HomeComponent,
        title: "Home",
        data: {
            userRole:['admin','user']
        }
    },

    {
        path: "home/prods",
        component: ProdsComponent,
        canActivate: [AuthGuardService,UserRoleGuard],
        title: "Products",
        data: {
            userRole:['admin']
        },
        children: [
            {
                path: 'add-prod',
                component: ProdFormComponent,
                title: "Add Product",
            },
            {
                path: ":prodsId",
                component: ProdComponent
            },
            {
                path: ":prodsId/edit",
                component: ProdFormComponent,
                title: "Edit Prod"
            }
        ]

    },


    {
        path: "users",
        component: UsersComponent,
        canActivate: [AuthGuardService,UserRoleGuard],
        data: {
            userRole:['admin','user']
        },
      
        title: "Users",
        children: [
            {
                path: 'add-user',
                component: UserFormComponent,
                title : "Add User",
            },
            {
                path: ":userId",
                component: UserComponent,

            },

            {
                path: ":userId/edit",
                component: UserFormComponent,
                title: "Edit User",
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

    {
        path: "page-not-found",
        component: PageNotFoundComponent
    },
    {
        path: '**',
        redirectTo: "page-not-found"
    }
]


@NgModule(
    {
        imports: [RouterModule.forRoot(appRoute)],
        exports: [RouterModule]
    }
)

export class AppRoutingModule {

}
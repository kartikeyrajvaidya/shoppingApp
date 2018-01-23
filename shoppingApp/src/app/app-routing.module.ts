import { Routes, RouterModule } from "@angular/router"
import {MenuCardComponent} from "./menu-card/menu-card.component"
import {LoginPageComponent} from "./login-page/login-page.component"
import { SingUpPageComponent } from "./sing-up-page/sing-up-page.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { NgModule } from "@angular/core";


const appRoute:Routes=[
    {path:"",component:MenuCardComponent},
    {path:"login",component:LoginPageComponent},
    {path:"singup",component:SingUpPageComponent},
    {path:"",component:ShoppingCartComponent}
];
@NgModule({
    imports:[
        RouterModule.forRoot(appRoute)
    ],
    exports:[RouterModule]
})


export class AppRouting{
    
}
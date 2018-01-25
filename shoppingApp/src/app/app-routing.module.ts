import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './auth/login-page/login-page.component' ;
import { SingUpPageComponent } from './auth/sing-up-page/sing-up-page.component';

import { NgModule } from '@angular/core';


const appRoute: Routes = [
    {path: 'login', component: LoginPageComponent},
    {path: 'singup', component: SingUpPageComponent}
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports: [RouterModule]
})


export class AppRouting {

}

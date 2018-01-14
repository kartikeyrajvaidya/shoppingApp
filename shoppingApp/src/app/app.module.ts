import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SingUpPageComponent } from './sing-up-page/sing-up-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    LoginPageComponent,
    SingUpPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

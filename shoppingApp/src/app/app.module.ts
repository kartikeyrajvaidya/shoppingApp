import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SingUpPageComponent } from './sing-up-page/sing-up-page.component';
import { AppRouting } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SingUpPageComponent,
  ],
  imports: [
    BrowserModule,AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

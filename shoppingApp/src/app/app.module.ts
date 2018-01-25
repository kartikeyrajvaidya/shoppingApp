import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { SingUpPageComponent } from './auth/sing-up-page/sing-up-page.component';
import { AppRouting } from './app-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SingUpPageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule, AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

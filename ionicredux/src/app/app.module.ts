import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RouterAppModule} from "./routermodule/routermodule.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

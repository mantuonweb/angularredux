import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//custom imports
import appRoutesList from "./app.routes.list";
import { HomeComponent } from './../home/home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutesList,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: [HomeComponent]
})
export class RouterAppModule { }

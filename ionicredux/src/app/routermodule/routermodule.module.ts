import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//custom imports
import appRoutesList from "./app.routes.list";

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
  declarations: []
})
export class RouterAppModule { }

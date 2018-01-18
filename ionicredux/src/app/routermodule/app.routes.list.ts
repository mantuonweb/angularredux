import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './../home/home.component';
const appRoutesList: Routes = [
     { path: 'home', component: HomeComponent },
     { path: '', component: HomeComponent },
     { path: '**', component: HomeComponent }
];
export default appRoutesList;
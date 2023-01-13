import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarousselComponent} from "./caroussel/caroussel.component";
import { GraphComponent } from './graph/graph.component';


const routes: Routes = [
  {path:'', redirectTo: 'caroussel', pathMatch: 'full'},
  {path: 'caroussel', component: CarousselComponent},
  {path:"graph", component:GraphComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

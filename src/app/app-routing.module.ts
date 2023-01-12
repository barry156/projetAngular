import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarousselComponent} from "./caroussel/caroussel.component";


const routes: Routes = [

  {path: '', component: CarousselComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarousselComponent} from "./caroussel/caroussel.component";
import {ContactComponent} from "./contact/contact.component";
import {FormComponent} from "./form/form.component";
import {ContactListComponent} from "./contact-list/contact-list.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";


const routes: Routes = [

  {path: '', component: CarousselComponent},
  {path: 'home', component: LandingPageComponent},
  {path: 'destination', component: FormComponent},
  {path: 'contact', component: ContactListComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

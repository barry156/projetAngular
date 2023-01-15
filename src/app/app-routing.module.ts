import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarousselComponent} from "./caroussel/caroussel.component";
import {FormComponent} from "./form/form.component";
import {ContactListComponent} from "./contact-list/contact-list.component";
import { GraphComponent } from './graph/graph.component';
import {ListeDestinationComponent} from "./liste-destination/liste-destination.component";
import {DestinationDetailComponent} from "./destination-detail/destination-detail.component";
import {AfriqueComponent} from "./afrique/afrique.component";
import {AsieComponent} from "./asie/asie.component";
import {EuropeComponent} from "./europe/europe.component";
import {EmployeeComponent} from "./employee/employee.component";
import {SearchDestinationComponent } from './search-destination/search-destination.component';
import {OceanieComponent} from "./oceanie/oceanie.component";
import {AmeriqueNordComponent} from "./amerique-nord/amerique-nord.component";
import {AmeriqueSudComponent} from "./amerique-sud/amerique-sud.component";


const routes: Routes = [




  { path:'', redirectTo: 'caroussel', pathMatch: 'full'},
  { path: 'contact', component: ContactListComponent},
  { path: 'rechercheDestination', component: SearchDestinationComponent},
  { path: 'newDestinationForm', component: FormComponent},
  { path: 'caroussel', component: CarousselComponent},
  { path: "graph", component:GraphComponent},
  { path: 'alldestinations', component: ListeDestinationComponent},
  { path: 'membres/:id', component: DestinationDetailComponent},
  { path: 'afriquedestination', component: AfriqueComponent},
  { path: 'asiedestination', component: AsieComponent},
  { path: 'europedestination', component: EuropeComponent},
  { path: 'oceaniedestination', component: OceanieComponent},
  { path: 'employee', component: EmployeeComponent},
  { path: 'nadestination', component: AmeriqueNordComponent},
  { path: 'sadestination', component: AmeriqueSudComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

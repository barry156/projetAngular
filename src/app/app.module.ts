import {registerLocaleData} from "@angular/common";
import * as fr from '@angular/common/locales/fr';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';




import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import {ContactComponent} from "./contact/contact.component";
import {ContactListComponent} from "./contact-list/contact-list.component";
import {FormComponent} from "./form/form.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
=======
import { GraphComponent } from './graph/graph.component';
import { ListeDestinationComponent } from './liste-destination/liste-destination.component';
import { DestinationComponent } from './destination/destination.component';
import { UserIconPipe } from './user-icon.pipe';
import { DestinationDetailComponent } from './destination-detail/destination-detail.component';
//import { AfiqueComponent } from './afrique/afique.component';
import { AfriqueComponent } from './afrique/afrique.component';
import { AsieComponent } from './asie/asie.component';
import { EuropeComponent } from './europe/europe.component';
import { OceanieComponent } from './oceanie/oceanie.component';
import { AmeriqueComponent } from './amerique/amerique.component';



>>>>>>> 975161f6b1d0c590c66c3b9c95e685b1ddb4059d
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CarousselComponent,
    SidebarComponent,
    FooterComponent,
<<<<<<< HEAD
    ContactComponent,
    ContactListComponent,
    FormComponent,
    LandingPageComponent,
=======
    GraphComponent,
    ListeDestinationComponent,
    DestinationComponent,
    UserIconPipe,
    DestinationDetailComponent,

    AfriqueComponent,
     AsieComponent,
     EuropeComponent,

     OceanieComponent,
     AmeriqueComponent,

     OceanieComponent


>>>>>>> 975161f6b1d0c590c66c3b9c95e685b1ddb4059d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    NgbModule,
    ReactiveFormsModule,
    FormsModule
=======

    NgbModule
>>>>>>> 975161f6b1d0c590c66c3b9c95e685b1ddb4059d
  ],
  providers: [],
  bootstrap: [AppComponent]
})
<<<<<<< HEAD
export class AppModule { constructor() {
  registerLocaleData(fr.default);
}}
=======
export class AppModule {}
>>>>>>> 975161f6b1d0c590c66c3b9c95e685b1ddb4059d

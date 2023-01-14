import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CarousselComponent,
    SidebarComponent,
    FooterComponent,
    GraphComponent,
    ListeDestinationComponent,
    DestinationComponent,
    UserIconPipe,
    DestinationDetailComponent,

    AfriqueComponent,
     AsieComponent,
     EuropeComponent,
     OceanieComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

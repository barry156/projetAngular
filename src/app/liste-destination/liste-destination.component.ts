import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import {DestinationService} from "../services/destination.service";
import{destination} from "../model/destination.model";

@Component({
  selector: 'app-liste-destination',
  templateUrl: './liste-destination.component.html',
  styleUrls: ['./liste-destination.component.scss']
})
export class ListeDestinationComponent {
  destinations!:destination[];
  constructor (private destinationService:DestinationService){}
  ngOnInit():void {
    this.destinations=this.destinationService.getAllDestinations();
  }


}

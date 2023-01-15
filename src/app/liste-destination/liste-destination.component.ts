import { Component ,Input } from '@angular/core';
import { CommonModule } from '@angular/common'
import {DestinationService} from "../services/destination.service";
import{destination} from "../model/destination.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-liste-destination',
  templateUrl: './liste-destination.component.html',
  styleUrls: ['./liste-destination.component.scss']
})
export class ListeDestinationComponent {
  isChecked1!:boolean
  isChecked2!:boolean

  url!:string;
  destinations!:destination[];
  constructor (private destinationService:DestinationService,private route:Router){}
  ngOnInit():void {
    this.destinations=this.destinationService.getAllDestinations();
    console.log(this.destinationService.isChecked1);





  }






}

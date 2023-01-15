import {Component, Input} from '@angular/core';
import {destination} from "../model/destination.model";
import {DestinationService} from "../services/destination.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-amerique-nord',
  templateUrl: './amerique-nord.component.html',
  styleUrls: ['./amerique-nord.component.scss']
})
export class AmeriqueNordComponent {
  @Input() destinations!: destination[];
  constructor(private destinationService: DestinationService, public router: Router) {
  }
  ngOnInit():void {
    this.destinations=this.destinationService.getNADestinations();
  }



}

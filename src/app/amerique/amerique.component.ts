import {Component, Input} from '@angular/core';
import {destination} from "../model/destination.model";
import {DestinationService} from "../services/destination.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-amerique',
  templateUrl: './amerique.component.html',
  styleUrls: ['./amerique.component.scss']
})
export class AmeriqueComponent {
  @Input() destinations!: destination[];

  constructor(private destinationService: DestinationService, public router: Router) {
  }
  ngOnInit():void {
    this.destinations=this.destinationService.getAmeriqueDestinations();
  }

}

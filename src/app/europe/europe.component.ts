import {Component, Input} from '@angular/core';
import {destination} from "../model/destination.model";
import {DestinationService} from "../services/destination.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.scss']
})
export class EuropeComponent {
  @Input() destinations!: destination[];

  constructor(private destinationService: DestinationService, public router: Router) {
  }
  ngOnInit():void {
    this.destinations=this.destinationService.getEuropeDestinations();
  }

}

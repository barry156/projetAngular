import {Component, Input} from '@angular/core';
import {destination} from "../model/destination.model";
import {DestinationService} from "../services/destination.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-oceanie',
  templateUrl: './oceanie.component.html',
  styleUrls: ['./oceanie.component.scss']
})
export class OceanieComponent {
  @Input() destinations!: destination[];

  constructor(private destinationService: DestinationService, public router: Router) {
  }
  ngOnInit():void {
    this.destinations=this.destinationService.getAfriquedestinations();
  }


}

import {Component, Input} from '@angular/core';
import {destination} from "../model/destination.model";
import {DestinationService} from "../services/destination.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-amerique-sud',
  templateUrl: './amerique-sud.component.html',
  styleUrls: ['./amerique-sud.component.scss']
})
export class AmeriqueSudComponent {
  @Input() destinations!: destination[];

  constructor(private destinationService: DestinationService, public router: Router) {
  }
  ngOnInit():void {
    this.destinations=this.destinationService.getSADestinations();
  }

}

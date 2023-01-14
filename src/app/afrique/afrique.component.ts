import {Component, Input} from '@angular/core';
import {destination} from "../model/destination.model";
import {Router} from "@angular/router";
import{UserIconPipe} from "../user-icon.pipe";
import{DestinationService} from "../services/destination.service";

@Component({
  selector: 'app-afrique',
  templateUrl: './afrique.component.html',
  styleUrls: ['./afrique.component.scss']
})
export class AfriqueComponent  {
  @Input() destinations!: destination[];

  constructor(private destinationService: DestinationService, public router: Router) {
  }
  ngOnInit():void {
    this.destinations=this.destinationService.getAfriquedestinations();
  }



}

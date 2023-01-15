import { Component,OnInit,Input } from '@angular/core';
import {destination} from "../model/destination.model";
import {Router} from "@angular/router";
import{UserIconPipe} from "../pipe/user-icon.pipe";
import{DestinationService} from "../services/destination.service";


@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent   {
  @Input() destination!: destination;
  constructor(private destinationService: DestinationService, private router: Router) {
  }


  onDetailDestination(){
    this.router.navigateByUrl('membres/' + this.destination.id);
  }

}

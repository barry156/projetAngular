import { Component } from '@angular/core';

import {DestinationService} from "../services/destination.service";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private service:DestinationService) {

  }

  press() {
    this.service.islogg=true;



  }

}

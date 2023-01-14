import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DestinationService} from "../services/destination.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  url!:string;
  constructor(private route:Router,public destinationss:DestinationService) {}
  ngOnInit(): void {
    this.url= this.route.url;
    console.log(this.url);


  }


}

import { Component,OnInit } from '@angular/core';
import {Router} from "@angular/router";


import {DestinationService} from "../services/destination.service";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private service:DestinationService,private router:Router) {

  }
  ngOnInit() {
    /*const navLinks = document.querySelectorAll('.nav-item')
    const menuToggle = document.getElementById('navbarSupportedContent')
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
    navLinks.forEach((l) => {
      l.addEventListener('click', () => { bsCollapse.toggle() })
    })*/


  }


  press() {
    this.service.islogg = true;
  }




  onAddNewDestination() {
    this.router.navigateByUrl('/newDestinationForm');
  }


}

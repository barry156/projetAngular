import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet2';



  myFunction() {
    var x = document.getElementById("myTopnav");
    // @ts-ignore
    if (x.className === "topnav") {
      // @ts-ignore
      x.className += " responsive";
    } else {
      // @ts-ignore
      x.className = "topnav";
    }
  }
  over() {

    // @ts-ignore
    document.getElementById("a").style.display="block";
}
}


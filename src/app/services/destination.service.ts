import { Injectable } from '@angular/core';
import{destination} from "../model/destination.model"


@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  destinations: destination[] = [
    {
      id: 133,
      nomlieu: 'Pyramides de Gaza',
      pays:"Egypte",
      continent:'Afrique',
      region:"nord de L'egypte'",

      prix:25007,


      afficheUrl: 'assets/membres/membres/membre1.jpg',
      like: 173,
      galerie:["assets/membres/membres/membre1.jpg", "assets/membres/membres/membre1.jpg","assets/membres/membres/membre1.jpg","assets/membres/membres/membre1.jpg", "assets/membres/membres/membre1.jpg","assets/membres/membres/membre1.jpg"],
      note: 4,
    },
    {
      id: 134,
      nomlieu: 'himalaya',
      pays:"Népal",
      continent:'Asie',
      region:"santis",

      prix:24500,


      afficheUrl: 'assets/membres/membres/membre1.jpg',
      like: 173,
      galerie:["assets/membres/membres/membre1.jpg", "assets/membres/membres/membre1.jpg","assets/membres/membres/membre1.jpg" ],
      note: 5,
    },
    {
      id: 135,
      nomlieu: 'tour effel',
      pays: "France",
      continent: 'Europe',
      region: "centre de la france",

      prix: 3500,


      afficheUrl: 'assets/membres/membres/membre1.jpg',
      like: 173,
      galerie:['assets/membres/membres/membre1.jpg', 'assets/membres/membres/membre1.jpg','assets/membre/membres/membre1.jpg' ],
      note: 3,
    },

    {
      id: 136,
      nomlieu: 'Sphinx',
      pays: "Egypte",
      continent:'Afrique',
      region: "nord de L'egypte'",

      prix: 5500,


      afficheUrl: 'assets/membres/membres/membre1.jpg',
      like: 173,
      galerie:["assets/membres/membres/membre1.jpg", "assets/membres/membres/membre1.jpg","assets/membres/membres/membre1.jpg" ],
      note: 3,
    },

    {
      id: 137,
      nomlieu: 'Opera Sydney',
      pays: "Australie",
      continent: 'Océanie',
      region: "New South Wales",

      prix: 5000,


      afficheUrl: 'assets/membres/membres/membre1.jpg',
      like: 173,
      galerie:["assets/membres/membres/membre1.jpg", "assets/membres/membres/membre1.jpg","assets/membres/membres/membre1.jpg" ],
      note: 3,
    },
    {
      id: 138,
      nomlieu: 'Statue de la liberté',
      pays: "États-Unis",
      continent: 'Amérique du Nord',
      region: "Liberty Island",

      prix: 4000,


      afficheUrl: 'assets/membres/membres/membre1.jpg',
      like: 173,
      galerie:["assets/membres/membres/membre1.jpg", "assets/membres/membres/membre1.jpg","assets/membres/membres/membre1.jpg" ],
      note: 3,
    },
    {
      id: 139,
      nomlieu: 'Machu Picchu',
      pays: "Peru",
      continent: 'Amérique du Sud',
      region: "Cusco",

      prix: 5000,


      afficheUrl: 'assets/membres/membres/membre1.jpg',
      like: 173,
      galerie:["assets/membres/membres/membre1.jpg", "assets/membres/membres/membre1.jpg","assets/membres/membres/membre1.jpg" ],
      note: 3,
    },
    ]
  getAllDestinations() {
    return this.destinations;
  }
  getDestinationBy(destinationId: number): destination {
    const destination = this.destinations.find(destination => destination.id ==destinationId);
    if(!destination) {
      throw new Error('Episode not found!');
    } else {
      return destination;
    }
  }
  getAfriqueDestinations() {
     return this.destinations.filter((el)=>el.continent=="Afrique");


  }
  getEuropeDestinations() {
    return this.destinations.filter((el)=>el.continent=="Europe");


  }
  getAsieDestinations() {
    return this.destinations.filter((el)=>el.continent=="Asie");


  }
  getOceanieDestinations() {
    return this.destinations.filter((el)=>el.continent=="Océanie");


  }
  getAmeriqueDestinations() {
    return this.destinations.filter((el)=>el.continent=="Amerique");



  }

  getNADestinations() {
    return this.destinations.filter((el)=>el.continent=="Amérique du Nord");
  }

  getSADestinations() {
    return this.destinations.filter((el)=>el.continent=="Amérique du Sud");


  }
  islogg!:boolean;



}

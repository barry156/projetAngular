import { Injectable } from '@angular/core';
import{destination} from "../model/destination.model"


@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  destinations: destination[] = [
    {
      id: 1,
      nomlieu: 'Pyramides de Gizeh',
      pays:"Egypte",
      continent:'Afrique',
      region:"nord de L'egypte'",
      prix:25007,
      afficheUrl: 'assets/destinations/afrique/gizeh/gizeh1.jpg',
      like: 173,
      galerie:["assets/membres/membres/membre1.jpg", "assets/membres/membres/membre1.jpg","assets/membres/membres/membre1.jpg","assets/membres/membres/membre1.jpg", "assets/membres/membres/membre1.jpg","assets/membres/membres/membre1.jpg"],
      note: 4,
    },
    {
      id: 2,
      nomlieu: 'Himalaya',
      pays:"Népal",
      continent:'Asie',
      region:"santis",
      prix:24500,
      afficheUrl: 'assets/destinations/asie/himalaya/hima1.jpg',
      like: 173,
      galerie:["assets/membres/membres/membre1.jpg", "assets/membres/membres/membre1.jpg","assets/membres/membres/membre1.jpg" ],
      note: 5,
    },
    {
      id: 3,
      nomlieu: 'Paris',
      pays: "France",
      continent: 'Europe',
      region: "centre de la france",
      prix: 3500,
      afficheUrl: 'assets/destinations/europe/paris/paris1.jpg',
      like: 173,
      galerie:['assets/membres/membres/membre1.jpg', 'assets/membres/membres/membre1.jpg','assets/membre/membres/membre1.jpg' ],
      note: 3,
    },

    {
      id: 4,
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
      id: 5,
      nomlieu: 'Sydney',
      pays: "Australie",
      continent: 'Océanie',
      region: "New South Wales",
      prix: 5000,
      afficheUrl: 'assets/destinations/oceanie/sydney/syd1.jpg',
      like: 173,
      galerie:["assets/membres/membres/membre1.jpg", "assets/membres/membres/membre1.jpg","assets/membres/membres/membre1.jpg" ],
      note: 3,
    },
    {
      id: 6,
      nomlieu: 'New-York',
      pays: "États-Unis",
      continent: 'Amérique du Nord',
      region: "Liberty Island",
      prix: 4000,
      afficheUrl: 'assets/destinations/ameriqueNord/liberte/liberte1.jpg',
      like: 173,
      galerie:["assets/membres/membres/membre1.jpg", "assets/membres/membres/membre1.jpg","assets/membres/membres/membre1.jpg" ],
      note: 3,
    },
    {
      id: 7,
      nomlieu: 'Machu Picchu',
      pays: "Peru",
      continent: 'Amérique du Sud',
      region: "Cusco",
      prix: 5000,
      afficheUrl: 'assets/destinations/ameriqueSud/machu/machu1.jpg',
      galerie:["assets/membres/membres/membre1.jpg", "assets/membres/membres/membre1.jpg","assets/membres/membres/membre1.jpg" ],
      like: 173,
      note: 3,
    },
    {
      id: 8,
      nomlieu: 'côte amalfitaine',
      pays: "Italie",
      continent: 'Europe',
      region: "Salerno",
      prix: 2500,
      afficheUrl: 'assets/destinations/europe/amalfi/amalfi1.jpg',
      galerie:["assets/membres/membres/membre1.jpg", "assets/membres/membres/membre1.jpg","assets/membres/membres/membre1.jpg" ],
      like: 173,
      note: 3,
    },
    {
      id: 9,
      nomlieu: 'Barcelone',
      pays: "Espagne",
      continent: 'Europe',
      region: "Catalogne",
      prix: 1000,
      afficheUrl: 'assets/destinations/europe/barcelone/barca1.jpg',
      galerie:["assets/membres/membres/membre1.jpg", "assets/membres/membres/membre1.jpg","assets/membres/membres/membre1.jpg" ],
      like: 173,
      note: 3,
    },
    {
      id: 10,
      nomlieu: 'Casablanca',
      pays: "Maroc",
      continent: 'Afrique',
      region: "Casablanca-Settat",
      prix: 1200,
      afficheUrl: 'assets/destinations/afrique/casablanca/casa1.jpg',
      like: 173,
      galerie:["assets/membres/membres/membre1.jpg", "assets/membres/membres/membre1.jpg","assets/membres/membres/membre1.jpg"],
      note: 3,
    },
    {
      id: 11,
      nomlieu: 'Chutes du Niagara',
      pays: "Canada/États-Unis",
      continent: 'Amérique du Nord',
      region: "Niagara Falls",
      prix: 3500,
      afficheUrl: 'assets/destinations/ameriqueNord/niagara/nia1.jpg',
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
   isChecked1!:boolean;
   isChecked2!:boolean;
  setIsChecked1(value:boolean){

    this.isChecked1=value;
  }
  setIsChecked2(value:boolean) {

    this.isChecked2=value;
  }
  getIsChecked1():boolean {

     return this.isChecked1;
  }
  getIsChecked2() :boolean {

    return this.isChecked2;
  }
  getIsLogg() :boolean {

    return this.islogg;
  }


}

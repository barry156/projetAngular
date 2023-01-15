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
      region:"nord de L'egypte",
      prix:25007,
      afficheUrl: 'assets/destinations/afrique/gizeh/gizeh1.jpg',
      like: 173,
      galerie:["assets/destinations/afrique/gizeh/gizeh1.jpg",
       "assets/destinations/afrique/gizeh/gizeh2.jpg",
       "assets/destinations/afrique/gizeh/gizeh3.jpg",
       "assets/destinations/afrique/gizeh/gizeh4.jpg",
       "assets/destinations/afrique/gizeh/gizeh5.jpg",
       "assets/destinations/afrique/gizeh/gizeh6.jpg"
      ],
      note: 4,
    },
    {
      id: 2,
      nomlieu: 'Himalaya',
      pays:"Népal",
      continent:'Asie',
      region:"Khumbu",
      prix:24500,
      afficheUrl: 'assets/destinations/asie/himalaya/hima1.jpg',
      like: 173,
      galerie:["assets/destinations/asie/himalaya/hima1.jpg",
      "assets/destinations/asie/himalaya/hima2.jpg",
      "assets/destinations/asie/himalaya/hima3.jpg",
      "assets/destinations/asie/himalaya/hima4.jpg",
      "assets/destinations/asie/himalaya/hima5.jpg",
      "assets/destinations/asie/himalaya/hima6.jpg"
     ],
      note: 5,
    },
    {
      id: 3,
      nomlieu: 'Paris',
      pays: "France",
      continent: 'Europe',
      region: "Île-de-France",
      prix: 3500,
      afficheUrl: 'assets/destinations/europe/paris/paris1.jpg',
      like: 173,
      galerie:['assets/destinations/europe/paris/paris1.jpg',
      'assets/destinations/europe/paris/paris2.jpg',
      'assets/destinations/europe/paris/paris3.jpg',
      'assets/destinations/europe/paris/paris4.jpg',
      'assets/destinations/europe/paris/paris5.jpg',
      'assets/destinations/europe/paris/paris6.jpg'
     ],
      note: 3,
    },

    {
      id: 4,
      nomlieu: 'Cameroun',
      pays: "Cameroun",
      continent:'Afrique',
      region: "Douala",
      prix: 5500,
      afficheUrl: "assets/destinations/afrique/Cameroun/Cameroun1.jpg",
      like: 173,
      galerie:["assets/destinations/afrique/Cameroun/Cameroun1.jpg",
      "assets/destinations/afrique/Cameroun/Cameroun2.jpg",
      "assets/destinations/afrique/Cameroun/Cameroun3.jpg",
      "assets/destinations/afrique/Cameroun/Cameroun4.jpg",
      "assets/destinations/afrique/Cameroun/Cameroun5.jpg",
      "assets/destinations/afrique/Cameroun/Cameroun6.jpg",
     ],
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
      galerie:['assets/destinations/oceanie/sydney/syd1.jpg',
      'assets/destinations/oceanie/sydney/syd2.jpg',
      'assets/destinations/oceanie/sydney/syd3.jpg',
      'assets/destinations/oceanie/sydney/syd4.jpg',
      'assets/destinations/oceanie/sydney/syd5.jpg',
      'assets/destinations/oceanie/sydney/syd6.jpg'
    ],
      note: 3,
    },
    {
      id: 6,
      nomlieu: 'New-York',
      pays: "États-Unis",
      continent: 'Amérique du Nord',
      region: "Liberty Island",
      prix: 4000,
      afficheUrl: 'assets/destinations/ameriqueNord/newYork/ny1.jpg',
      like: 173,
      galerie:['assets/destinations/ameriqueNord/newYork/ny1.jpg',
      'assets/destinations/ameriqueNord/newYork/ny2.jpg',
      'assets/destinations/ameriqueNord/newYork/ny3.jpg',
      'assets/destinations/ameriqueNord/newYork/ny4.jpg',
      'assets/destinations/ameriqueNord/newYork/ny5.jpg',
      'assets/destinations/ameriqueNord/newYork/ny6.jpg',
    ],
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
      galerie:['assets/destinations/ameriqueSud/machu/machu1.jpg',
      'assets/destinations/ameriqueSud/machu/machu2.jpg',
      'assets/destinations/ameriqueSud/machu/machu3.jpg',
      'assets/destinations/ameriqueSud/machu/machu4.jpg',
      'assets/destinations/ameriqueSud/machu/machu5.jpg',
      'assets/destinations/ameriqueSud/machu/machu6.jpg'
    ],
      like: 173,
      note: 3,
    },
    {
      id: 8,
      nomlieu: 'Côte amalfitaine',
      pays: "Italie",
      continent: 'Europe',
      region: "Salerno",
      prix: 2500,
      afficheUrl: 'assets/destinations/europe/amalfi/amalfi1.jpg',
      galerie:['assets/destinations/europe/amalfi/amalfi1.jpg',
      'assets/destinations/europe/amalfi/amalfi2.jpg',
      'assets/destinations/europe/amalfi/amalfi3.jpg',
      'assets/destinations/europe/amalfi/amalfi4.jpg',
      'assets/destinations/europe/amalfi/amalfi5.jpg',
      'assets/destinations/europe/amalfi/amalfi6.jpg'
     ],
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
      galerie:['assets/destinations/europe/barcelone/barca1.jpg',
      'assets/destinations/europe/barcelone/barca2.jpg',
      'assets/destinations/europe/barcelone/barca3.jpg',
      'assets/destinations/europe/barcelone/barca4.jpg',
      'assets/destinations/europe/barcelone/barca5.jpg',
      'assets/destinations/europe/barcelone/barca6.jpg'
    ],
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
      galerie:['assets/destinations/afrique/casablanca/casa1.jpg',
      'assets/destinations/afrique/casablanca/casa2.jpg',
      'assets/destinations/afrique/casablanca/casa3.jpg',
      'assets/destinations/afrique/casablanca/casa4.jpg',
      'assets/destinations/afrique/casablanca/casa5.jpg',
      'assets/destinations/afrique/casablanca/casa6.jpg'
    ],
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
      galerie:['assets/destinations/ameriqueNord/niagara/nia1.jpg',
      'assets/destinations/ameriqueNord/niagara/nia2.jpg',
      'assets/destinations/ameriqueNord/niagara/nia3.jpg',
      'assets/destinations/ameriqueNord/niagara/nia4.jpg',
      'assets/destinations/ameriqueNord/niagara/nia5.jpg',
      'assets/destinations/ameriqueNord/niagara/nia6.jpg'
     ],
      note: 3,
    },

    {
      id: 12,
      nomlieu: 'Fouta Djallon',
      pays: "Guinée",
      continent: 'Afrique',
      region: "Labé",
      prix: 2200,
      afficheUrl: 'assets/destinations/afrique/foutaDjallon/foutaDjallon1.jpg',
      like: 2000,
      galerie:['assets/destinations/afrique/foutaDjallon/foutaDjallon1.jpg',
      'assets/destinations/afrique/foutaDjallon/foutaDjallon2.jpg',
      'assets/destinations/afrique/foutaDjallon/foutaDjallon3.jpg',
      'assets/destinations/afrique/foutaDjallon/foutaDjallon4.jpg',
      'assets/destinations/afrique/foutaDjallon/foutaDjallon5.jpg',
      'assets/destinations/afrique/foutaDjallon/foutaDjallon6.jpg'
     ],
      note: 5,
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

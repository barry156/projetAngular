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
      note: 4,
    },
    {
      id: 134,
      nomlieu: 'hymalaya',
      pays:"vietnam",
      continent:'Asie',
      region:"santis",

      prix:24500,


      afficheUrl: 'assets/membres/membres/membre1.jpg',
      like: 173,
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
      note: 3,
    }
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
  getAfriquedestinations() {
     return this.destinations.filter((el)=>el.continent=="Afrique");


  }
  getEuropeDestinations() {
    return this.destinations.filter((el)=>el.continent=="Europe");


  }
  getAsieDestinations() {
    return this.destinations.filter((el)=>el.continent=="Asie");


  }

}

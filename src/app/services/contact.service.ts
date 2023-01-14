import {Injectable} from "@angular/core";
import {Validator} from "@angular/forms";
import {ContactModel} from "../model/contact.model";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ContactService{
  contacts: ContactModel[]= [
    {

      id:1,
      nomLieu:'Yaounde',
      pays: 'cameroun',
      imageUrl:'assets/img_3.png',
      region: 'centre',
      nomPersonne:'Mamadou',
      prenomPersonne: 'Barry',
      identifiantIG: 'itsBarry',
      numTel: 145,
      facebook: 'Aucun',
      photoUrl:'assets/img_3.png',
      email:'siradio156@gmail.com',
      activites:"fleuve"
    },

    {
      id:2,
      nomLieu:'Yaounde',
      pays: 'cameroun',
      imageUrl:'assets/img2.jpg',
      region: 'centre',
      nomPersonne:'Nguemnang',
      prenomPersonne: 'Naomie',
      identifiantIG: 'itsnaomie',
      numTel: 145,
      facebook: 'Aucun',
      photoUrl:'assets/img2.jpg',
      email:'naomienguemnang@gmail.com',
      activites:"fleuve"

    },

    {
      id:3,
      nomLieu:'Yaounde',
      pays: 'cameroun',
      imageUrl:'assets/img_2.png',
      region: 'centre',
      nomPersonne:'Linemann',
      prenomPersonne: 'Anton',
      identifiantIG: 'itsAnton',
      numTel: 145,
      facebook: 'Aucun',
      photoUrl:'assets/img_2.png',
      email:'anton.linemann@hotmail.com',
      activites:"fleuve"
    }
  ];

  getAllContact():ContactModel[]{
    return this.contacts;
  }
}

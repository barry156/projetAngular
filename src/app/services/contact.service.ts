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
      nomPersonne:'Mamadou',
      prenomPersonne: 'Barry',
      identifiantIG: 'itsBarry',
      numTel: 145,
      facebook: 'Aucun',
      photoUrl:'assets/contacts/Mamadou.jpg',
      email:'siradio156@gmail.com',
      activites:"fleuve"
    },

    {
      id:2,
      nomPersonne:'Nguemnang',
      prenomPersonne: 'Naomie',
      identifiantIG: 'itsnaomie',
      numTel: 145,
      facebook: 'Aucun',
      photoUrl:'assets/contacts/Naomie.jpg',
      email:'naomienguemnang@gmail.com',
      activites:"fleuve"

    },

    {
      id:3,
      nomPersonne:'Linemann',
      prenomPersonne: 'Anton',
      identifiantIG: 'itsAnton',
      numTel: 145,
      facebook: 'Aucun',
      photoUrl:'assets/contacts/Anton.jpg',
      email:'anton.linemann@hotmail.com',
      activites:"fleuve"
    }
  ];

  getAllContact():ContactModel[]{
    return this.contacts;
  }
}

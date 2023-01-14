import {Component,Input, OnInit} from '@angular/core';
import {ContactModel} from "../contactModel/contact.model";
import {ContactService} from "../contactService/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  @Input()contact!: ContactModel;

ngOnInit() :void{

}

}

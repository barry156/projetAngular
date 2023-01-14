import {Component,Input, OnInit} from '@angular/core';
import {ContactModel} from "../model/contact.model";

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

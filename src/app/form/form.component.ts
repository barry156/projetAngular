import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup,Validators} from "@angular/forms";
import {map,Observable} from "rxjs";
import {Router} from "@angular/router";
import {destination} from "../model/destination.model";
import {DestinationService} from "../services/destination.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  destinationForm!: FormGroup;
  destinationPreview$ !: Observable<destination>;

  constructor(private formBuilder: FormBuilder,
              private destinationService: DestinationService,
              private router: Router) {

  }

  ngOnInit():void {
    this.destinationForm= this.formBuilder.group({

      nomlieu:[null, [Validators.required]],
      pays:[null,[Validators.required]],
      continent:[null,[Validators.required]],
      region:[null],
      prix:[null],
      afficheUrl:[null,[Validators.required],]

    });
  }

  onSubmitForm() {
    this.destinationService.addDestination(this.destinationForm.value);
    this.router.navigateByUrl('/alldestinations');
  }



}

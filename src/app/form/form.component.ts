import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {map,Observable} from "rxjs";
import {ContactModel} from "../model/contact.model";
import {ContactService} from "../services/contact.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  destinationForm!: FormGroup;
  destinationPreview$ !: Observable<ContactModel>;

  constructor(private formBuilder: FormBuilder,
              private contactService: ContactService,
              private router: Router) {

  }
  ngOnInit():void {
    this.destinationForm= this.formBuilder.group({

      nomLieu:[null, [Validators.required]],
      pays:[null,[Validators.required]],
      imageUrl:[null,[Validators.required]],
      region:[null,[Validators.required]],
      activites:[null],
    }, {
      updateOn: 'blur'});
    this.destinationPreview$=this.destinationForm.valueChanges.pipe(
      map(formValue=> ({
        ...formValue,
        id:0
        })
      )
    )
  }

  onSubmit() {
    this.router.navigateByUrl('/destination');
  }
}

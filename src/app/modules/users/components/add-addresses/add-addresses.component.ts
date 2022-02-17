import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-addresses',
  templateUrl: './add-addresses.component.html',
  styleUrls: ['./add-addresses.component.scss']
})

export class AddAddressesComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;

  private addressesGroup: FormGroup;

  private initAddressFormGroup() : FormGroup {
    this.addressesGroup = new FormGroup({
      addressLine: new FormControl('', Validators.required),
      city: new FormControl(''),
      zip: new FormControl('')
    })
    return this.addressesGroup;
  }

  ngOnInit(): void {
    this.parentFormGroup.addControl('addresses', new FormArray([this.initAddressFormGroup()]));
  }

  public getFormsControls(): any {
    return (this.parentFormGroup.controls['addresses'] as FormArray).controls;
  }

  public toggleZipValidator(zipControl: FormControl, cityControl: FormControl): void {
    if (cityControl.value) {
      zipControl.setValidators(Validators.required);
      zipControl.enable();
    } else {
      zipControl.disable();
      zipControl.clearValidators();
    }
    zipControl.updateValueAndValidity();
  }

  public removeAddress(index: number): void {
    let addresses = this.parentFormGroup.get('addresses') as FormArray;
    if (addresses.controls.length > 1) addresses.removeAt(index)
  }

  public addAddress(): void {
    let addresses = this.parentFormGroup.get('addresses') as FormArray;
    addresses.push(this.initAddressFormGroup());
    // console.log((this.parentFormGroup.get('addresses') as FormArray).controls);
  }

}

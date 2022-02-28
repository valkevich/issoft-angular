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


  private toggleZipValidator(addressGroup: FormGroup): void {
    if (addressGroup.get('city').value) {
      addressGroup.get('postcode').setValidators(Validators.required);
      addressGroup.get('postcode').enable();
    } else {
      addressGroup.get('postcode').clearValidators();
      addressGroup.get('postcode').disable();
    }
    addressGroup.get('postcode').updateValueAndValidity();
  }

  private initAddressFormGroup(): FormGroup {
    const addressesGroup = new FormGroup({
      country: new FormControl('', Validators.required),
      city: new FormControl(''),
      postcode: new FormControl({ value: '', disabled: true })
    })
    addressesGroup.get('city').valueChanges.subscribe(() => this.toggleZipValidator(addressesGroup))
    return addressesGroup;
  }

  ngOnInit(): void {
    this.parentFormGroup.addControl('addresses', new FormArray([this.initAddressFormGroup()]));
  }

  public getFormsControls(): any {
    return (this.parentFormGroup.controls['addresses'] as FormArray).controls;
  }

  public removeAddress(index: number): void {
    let addresses = this.parentFormGroup.get('addresses') as FormArray;
    if (addresses.controls.length > 1) addresses.removeAt(index)
  }

  public addAddress(): void {
    let addresses = this.parentFormGroup.get('addresses') as FormArray;
    addresses.push(this.initAddressFormGroup());
  }

}

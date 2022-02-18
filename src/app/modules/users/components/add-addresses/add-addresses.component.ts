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
      addressGroup.get('zip').setValidators(Validators.required);
      addressGroup.get('zip').enable();
    } else {
      addressGroup.get('zip').clearValidators();
      addressGroup.get('zip').disable();
    }
    addressGroup.get('zip').updateValueAndValidity();
  }

  private initAddressFormGroup(): FormGroup {
    const addressesGroup = new FormGroup({
      addressLine: new FormControl('', Validators.required),
      city: new FormControl(''),
      zip: new FormControl({ value: '', disabled: true })
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
    console.log((this.parentFormGroup.get('addresses') as FormArray).controls);
  }

}

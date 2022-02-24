import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit, OnDestroy {
  @Output() public onValueChanged = new EventEmitter<string>();

  public userSearchControl: FormControl;
  public subscription: Subscription;

  ngOnInit(): void {
    this.userSearchControl = new FormControl('');
    this.subscription = this.getInputValue().subscribe(value => this.onValueChanged.emit(value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public clearFormControl(): void {
    this.userSearchControl.setValue('');
  }

  public getInputValue(): Observable<string> {
    return this.userSearchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      map(value => value.toLowerCase())
    )
  }
}

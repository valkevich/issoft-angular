import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private modalService: ModalService) { }

  choose(choice: boolean): void {
    this.modalService.navigateAwaySelection$.next(choice);
  }

}

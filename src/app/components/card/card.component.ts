import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/pages/cards-page/cards-page.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() user: IUser | undefined;
  @Input() isHiddenCardsShown: boolean | undefined;

  changeUserStatus() {
    if(this.user) {
      this.user.activated = !this.user.activated;  
    }
  }
}

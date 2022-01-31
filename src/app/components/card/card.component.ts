import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUser } from 'src/app/services/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() user: IUser | undefined;
  @Input() isHiddenCardsShown: boolean | undefined;
  @Input() userStatus: boolean | undefined;

  userIsAdult() {
    let userIsAdult = false;
    if (this.user) {
      this.user.age > 18 ? userIsAdult = true : userIsAdult = false;
    }
    return userIsAdult;
  }

  changeUserStatus() {
    if (this.user && this.userIsAdult()) {
      this.user.activated = !this.user.activated;
    }
  }

  diactivateUser() {
    if (this.user && this.user.activated && this.userIsAdult()) {
      this.user.activated = false;
    }
  }
}

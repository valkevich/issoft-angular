import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUser } from 'src/app/services/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() user: IUser | undefined;
  @Input() isHiddenCardsShown: boolean | undefined;

  changeUserStatus() {
    if (this.user) {
      this.user.activated = !this.user.activated;
      console.log('a');
      
    }
  }
}

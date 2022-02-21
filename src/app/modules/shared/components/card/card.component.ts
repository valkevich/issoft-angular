import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ICard } from '../../interfaces/card.interface';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() data: ICard;
  @Output() changeFavoriteStatusClick = new EventEmitter<ICard>();

  public onChangeFavoritesStatus(): void {
    this.changeFavoriteStatusClick.emit(this.data);
  }
}

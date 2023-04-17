import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICard} from "../../../shared/models/card";

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent {
  @Input() card!: ICard;
  @Input() index!: number;
  @Input() isOpen!: boolean;
  @Input() animEnd!: boolean;
  @Output() turnEvent = new EventEmitter<number>();
  @Output() delete = new EventEmitter<ICard>();

  turn(): void {
    if (this.animEnd) {
      this.turnEvent.emit(this.index);
    }
  }
  deleteCard(): void {
    this.delete.emit(this.card);
  }
}

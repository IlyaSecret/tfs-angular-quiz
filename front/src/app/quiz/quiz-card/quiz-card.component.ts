import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICard} from "../../../shared/models/card";

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit{
  @Input() card!: ICard;
  @Input() turnedAll!: boolean;
  @Output() delete = new EventEmitter<ICard>();


  ngOnInit(): void {
    if(localStorage.getItem(this.card.id) === 'true') {
      this.card.isOpened = true;
    }
  }

  turn(): void {
    this.card.isOpened = !this.card.isOpened;
    localStorage.setItem(this.card.id, `${this.card.isOpened}`)
  }
  deleteCard(): void {
    localStorage.removeItem(this.card.id)
    this.delete.emit(this.card);
  }
}

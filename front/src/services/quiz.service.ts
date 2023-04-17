import {Injectable} from "@angular/core";
import {ICard} from "../shared/models/card";

const cardsArr: ICard[] = [
  {
    term: "Сопротивление",
    description: " физическая величина, которая показывает способность проводника пропускать электрический ток. Чем выше сопротивление, тем ниже эта способность."
  },
  {
    term: "Удельное сопротивление проводника",
    description: "это физическая величина, которая показывает способность материала пропускать электрический ток. Это табличная величина, она зависит только от материала."
  }
];

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private _cards = cardsArr

  get cards(): ICard[] {
    return this._cards;
  }
  addCard(card: ICard): void {
    this._cards = [...this._cards, card];
  }
  deleteCard(card: ICard): void {
    this._cards = this._cards.filter(c => c.term !== card.term);
  }
}

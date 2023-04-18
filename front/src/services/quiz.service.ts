import {Inject, Injectable} from "@angular/core";
import {ICard} from "../shared/models/card";
import {QuizApiServiceToken} from "./IQuizService";
import {QuizApiService} from "./quiz-api.service";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private _cards: ICard[] = [];

  constructor(@Inject(QuizApiServiceToken) public service: QuizApiService) {
  }
  init(): void {
    this.service.getAll().subscribe(items => {
      this._cards = items;
    })
  }
  get cards(): ICard[] {
    return this._cards;
  }
  addCard(card: ICard): void {
    this.service.addQuizCard(card).subscribe(card => {
      this.init()
    })
  }
  deleteCard(id: string): void {
    this.service.deleteCard(id).subscribe(item => {
      this.init()
    })
  }
}

import {Observable} from "rxjs";
import {ICard} from "../shared/models/card";
import {InjectionToken} from "@angular/core";

export const QuizApiServiceToken = new InjectionToken<IQuizService>('IQuizService');

export interface IQuizService {
  getAll(): Observable<ICard[]>;
  addQuizCard(card: ICard): Observable<ICard>;
  deleteCard(id: string): Observable<void>
}

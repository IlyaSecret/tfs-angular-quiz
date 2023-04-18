import {Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { ICard } from "src/shared/models/card";
import {IQuizService} from "./IQuizService";
import {HttpClient} from "@angular/common/http";

const host = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class QuizApiService implements IQuizService {
  constructor(private httpService: HttpClient) {
  }
    getAll(): Observable<ICard[]> {
        return this.httpService.get<ICard[]>(host)
    }
    addQuizCard(card: ICard): Observable<ICard> {
        return this.httpService.post<ICard>(host, card)
    }
    deleteCard(id: string): Observable<void> {
        return this.httpService.delete<void>(host.concat(id));
    }

}

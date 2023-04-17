import { Component } from '@angular/core';
import {ICard} from "../../shared/models/card";
import {QuizService} from "../../services/quiz.service";



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  activeId: number = -1;
  animEnd: boolean = true;
  constructor(public service: QuizService) {
  }
  changeActiveCard(index: number): void {
    this.activeId = this.activeId === index ? -1 : index;
    this.animEnd = !this.animEnd;
    setTimeout(() => this.animEnd = !this.animEnd, 800)
  }
}

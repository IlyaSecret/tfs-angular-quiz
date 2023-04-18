import {Component, OnInit} from '@angular/core';
import {ICard} from "../../shared/models/card";
import {QuizService} from "../../services/quiz.service";



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit{
  activeId: number = -1;
  animEnd: boolean = true;
  constructor(public service: QuizService) {
  }
  ngOnInit(): void {
    this.service.init()
  }

  changeActiveCard(index: number): void {
    this.activeId = this.activeId === index ? -1 : index;
    this.animEnd = !this.animEnd;
    setTimeout(() => this.animEnd = !this.animEnd, 800)
  }
  openAllCards(): void {
    this.service.cards.forEach(el=> {
      el.isOpened = true
      localStorage.setItem(el.id, 'true')
    })
  }
}

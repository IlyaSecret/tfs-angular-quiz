import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizCardComponent } from './quiz-card.component';



@NgModule({
  declarations: [
    QuizCardComponent
  ],
  exports: [
    QuizCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuizCardModule { }
